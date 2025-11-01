// app/api/tour/route.js
import dbConnect from "@/db/mongodb";
import TourRequest from "@/models/TourRequest";
import validator from "validator";

const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX || "10", 10);
const RATE_LIMIT_WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS || "60000", 10);
const ipStore = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const entry = ipStore.get(ip);
  if (!entry) {
    ipStore.set(ip, { count: 1, firstRequestTs: now });
    return false;
  }
  if (now - entry.firstRequestTs > RATE_LIMIT_WINDOW_MS) {
    ipStore.set(ip, { count: 1, firstRequestTs: now });
    return false;
  }
  entry.count++;
  ipStore.set(ip, entry);
  return entry.count > RATE_LIMIT_MAX;
}

const JSON_HEADERS = { "Content-Type": "application/json" };

export async function POST(req) {
  try {
    await dbConnect();

    const ipHeader = req.headers.get("x-forwarded-for");
    const ip = ipHeader ? ipHeader.split(",")[0].trim() : req.headers.get("x-real-ip") || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    // Rate limit
    if (isRateLimited(ip)) {
      return new Response(JSON.stringify({ success: false, message: "Too many requests. Please try again later." }), {
        status: 429,
        headers: JSON_HEADERS,
      });
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return new Response(JSON.stringify({ success: false, message: "Invalid JSON body." }), {
        status: 400,
        headers: JSON_HEADERS,
      });
    }

    const { fullName, contact, preferredDate, travellers, description, destination, recaptchaToken } = body;

    // Ensure recaptcha token exists before calling verification
    if (!recaptchaToken) {
      return new Response(JSON.stringify({ success: false, message: "reCAPTCHA token missing." }), {
        status: 400,
        headers: JSON_HEADERS,
      });
    }

    // Ensure server secret is present
    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error("Missing RECAPTCHA_SECRET_KEY in environment.");
      return new Response(JSON.stringify({ success: false, message: "Server misconfiguration: recaptcha secret missing." }), {
        status: 500,
        headers: JSON_HEADERS,
      });
    }

    // Verify reCAPTCHA with a short timeout
    let recaptchaData = null;
    try {
      // Use AbortController to timeout recaptcha verification
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000); // 5s timeout for recaptcha
      const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        }),
        signal: controller.signal,
      });
      clearTimeout(timeout);

      // If google returns non-200, treat as failure but log details
      if (!verifyRes.ok) {
        const text = await verifyRes.text().catch(() => "");
        console.error("reCAPTCHA verify returned non-OK:", verifyRes.status, text);
        return new Response(JSON.stringify({ success: false, message: "reCAPTCHA verification failed." }), {
          status: 403,
          headers: JSON_HEADERS,
        });
      }

      recaptchaData = await verifyRes.json();
    } catch (recErr) {
      if (recErr.name === "AbortError") {
        console.error("reCAPTCHA verification timeout:", recErr);
        return new Response(JSON.stringify({ success: false, message: "reCAPTCHA verification timed out." }), {
          status: 504,
          headers: JSON_HEADERS,
        });
      }
      console.error("Error while verifying reCAPTCHA:", recErr);
      return new Response(JSON.stringify({ success: false, message: "Failed to verify reCAPTCHA." }), {
        status: 502,
        headers: JSON_HEADERS,
      });
    }

    if (!recaptchaData || !recaptchaData.success) {
      // Optionally log recaptchaData for debugging (do not leak to client)
      console.error("reCAPTCHA failed:", recaptchaData);
      return new Response(JSON.stringify({ success: false, message: "reCAPTCHA verification failed." }), {
        status: 403,
        headers: JSON_HEADERS,
      });
    }

    // === Server-side validation aligned to client rules ===
    // fullName: alphabet + spaces only, 2-50 chars
    if (!fullName || validator.isEmpty(String(fullName).trim())) {
      return new Response(JSON.stringify({ success: false, message: "Full Name is required." }), { status: 400, headers: JSON_HEADERS });
    }
    const nameTrim = String(fullName).trim();
    if (nameTrim.length < 2 || nameTrim.length > 50 || !/^[A-Za-z\s]+$/.test(nameTrim)) {
      return new Response(JSON.stringify({ success: false, message: "Full Name must be 2–50 characters and contain only letters and spaces." }), { status: 400, headers: JSON_HEADERS });
    }

    // contact: digits only, 10-14
    if (!contact || validator.isEmpty(String(contact).trim())) {
      return new Response(JSON.stringify({ success: false, message: "Contact is required." }), { status: 400, headers: JSON_HEADERS });
    }
    const contactTrim = String(contact).trim();
    if (!/^\d{10,14}$/.test(contactTrim)) {
      return new Response(JSON.stringify({ success: false, message: "Contact number must be 10–14 digits." }), { status: 400, headers: JSON_HEADERS });
    }

    // destination required
    if (!destination || validator.isEmpty(String(destination).trim())) {
      return new Response(JSON.stringify({ success: false, message: "Destination is required." }), { status: 400, headers: JSON_HEADERS });
    }

    // description required and max length
    if (!description || validator.isEmpty(String(description).trim())) {
      return new Response(JSON.stringify({ success: false, message: "Description is required." }), { status: 400, headers: JSON_HEADERS });
    }
    const descTrim = String(description).trim();
    if (descTrim.length > 300) {
      return new Response(JSON.stringify({ success: false, message: "Description too long (max 300 characters)." }), { status: 400, headers: JSON_HEADERS });
    }

    // preferredDate sanitize (optional)
    const preferredDateSafe = preferredDate ? String(preferredDate).trim() : "";

    // travellers: allowed values fallback to "0-5" (adjust per your UI options)
    const allowedTravellers = ["0-5", "5-10", "10-15", "more"];
    const travellersSafe = travellers && allowedTravellers.includes(travellers) ? travellers : allowedTravellers[0];

    // Sanitize text fields (escape for stored HTML safety)
    const safeData = {
      fullName: validator.escape(nameTrim),
      contact: contactTrim, // keep digits
      preferredDate: validator.escape(preferredDateSafe),
      travellers: travellersSafe,
      description: validator.escape(descTrim),
      destination: validator.escape(String(destination).trim()),
      ip,
      userAgent,
      meta: { referer: req.headers.get("referer") || null },
    };

    const created = await TourRequest.create(safeData);

    return new Response(
      JSON.stringify({ success: true, message: "Request received. We'll contact you soon.", data: { id: created._id } }),
      { status: 201, headers: JSON_HEADERS }
    );
  } catch (err) {
    // Detailed server logging for debugging
    console.error("Error in /api/tour POST:", err && err.stack ? err.stack : err);
    return new Response(JSON.stringify({ success: false, message: "Server error. Please try again later." }), {
      status: 500,
      headers: JSON_HEADERS,
    });
  }
}
