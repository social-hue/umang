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

export async function POST(req) {
  try {
    await dbConnect();

    const ipHeader = req.headers.get("x-forwarded-for");
    const ip = ipHeader ? ipHeader.split(",")[0].trim() : req.headers.get("x-real-ip") || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    // 🛡️ Rate limit
    if (isRateLimited(ip)) {
      return new Response(JSON.stringify({ success: false, message: "Too many requests. Please try again later." }), {
        status: 429,
        headers: { "Content-Type": "application/json" },
      });
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return new Response(JSON.stringify({ success: false, message: "Invalid JSON body." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { fullName, contact, preferredDate, travellers, description, destination, recaptchaToken } = body;

    // ✅ reCAPTCHA verification
    const recaptchaVerify = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: recaptchaToken,
      }),
    });
    const recaptchaData = await recaptchaVerify.json();
    if (!recaptchaData.success) {
      return new Response(JSON.stringify({ success: false, message: "reCAPTCHA verification failed." }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }

    // ✅ Input validation
    if (!fullName || validator.isEmpty(fullName.trim())) {
      return new Response(JSON.stringify({ success: false, message: "Full Name is required." }), { status: 400 });
    }
    if (!contact || validator.isEmpty(contact.trim())) {
      return new Response(JSON.stringify({ success: false, message: "Contact is required." }), { status: 400 });
    }
    if (!destination || validator.isEmpty(destination.trim())) {
      return new Response(JSON.stringify({ success: false, message: "Destination is required." }), { status: 400 });
    }

    // Sanitize inputs
    const safeData = {
      fullName: validator.escape(fullName.trim()),
      contact: validator.escape(contact.trim()),
      preferredDate: preferredDate ? validator.escape(String(preferredDate).trim()) : "",
      travellers: travellers && ["0-5", "5-10", "10-15", "more"].includes(travellers) ? travellers : "0-5",
      description: description ? validator.escape(String(description).trim()) : "",
      destination: validator.escape(destination.trim()),
      ip,
      userAgent,
      meta: { referer: req.headers.get("referer") || null },
    };

    const created = await TourRequest.create(safeData);

    return new Response(
      JSON.stringify({ success: true, message: "Request received. We'll contact you soon.", data: { id: created._id } }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error in /api/tour POST:", err);
    return new Response(JSON.stringify({ success: false, message: "Server error. Please try again later." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
