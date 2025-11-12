import dbConnect from "@/db/mongodb";
import { NextResponse } from "next/server";
import sanitizeHtml from "sanitize-html";
import validator from "validator";
import { LRUCache } from "lru-cache";
import LegalForm from "@/models/LegalForm";

// LRU cache-based IP rate limiter
const rateLimitCache = new LRUCache({ max: 5000, ttl: 1000 * 60 });

function rateLimit(key, limit = 5) {
  const entry = rateLimitCache.get(key) || { count: 0 };
  entry.count += 1;
  rateLimitCache.set(key, entry);
  return { allowed: entry.count <= limit, remaining: Math.max(0, limit - entry.count) };
}

function sanitizeString(input) {
  return sanitizeHtml(String(input || ""), { allowedTags: [], allowedAttributes: {} }).trim();
}

export async function POST(req) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ success: false, message: "Invalid Content-Type" }, { status: 415 });
    }

    const body = await req.json();
    const { fullName, email, phone, message, recaptchaToken, honeypot } = body;

    if (honeypot) {
      return NextResponse.json({ success: false, message: "Bot detected." }, { status: 400 });
    }

    if (!fullName || !email || !phone) {
      return NextResponse.json({ success: false, message: "Please fill all required fields." }, { status: 400 });
    }

    if (!recaptchaToken) {
      return NextResponse.json({ success: false, message: "Missing reCAPTCHA token." }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.headers.get("x-real-ip") || "Unknown";
    const rl = rateLimit(`legal:${ip}`, 5);
    if (!rl.allowed) {
      return NextResponse.json({ success: false, message: "Too many requests. Please try again later." }, { status: 429 });
    }

    // Verify reCAPTCHA
    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY || "",
        response: recaptchaToken,
      }),
    });
    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return NextResponse.json({ success: false, message: "reCAPTCHA verification failed." }, { status: 403 });
    }

    // Validation
    if (!validator.isLength(fullName, { min: 3, max: 100 }) || !/^[A-Za-z\s]+$/.test(fullName)) {
      return NextResponse.json({ success: false, message: "Full name must be 3–100 letters only." }, { status: 400 });
    }

    if (!validator.isEmail(email)) {
      return NextResponse.json({ success: false, message: "Invalid email address." }, { status: 400 });
    }

    const normalizedPhone = phone.replace(/[^\d+]/g, "");
    if (!validator.isLength(normalizedPhone, { min: 10, max: 14 })) {
      return NextResponse.json({ success: false, message: "Invalid phone number." }, { status: 400 });
    }

    if (message && !validator.isLength(message, { max: 300 })) {
      return NextResponse.json({ success: false, message: "Message too long (max 300 chars)." }, { status: 400 });
    }

    await dbConnect();

    const created = await LegalForm.create({
      fullName: sanitizeString(fullName),
      email: validator.normalizeEmail(email),
      phone: sanitizeString(normalizedPhone),
      message: sanitizeString(message || ""),
      ip,
      userAgent: req.headers.get("user-agent") || "Unknown",
    });

    return NextResponse.json(
      { success: true, message: "Appointment booked successfully!", data: { id: created._id } },
      { status: 201 }
    );
  } catch (err) {
    console.error("Legal form submission error:", err);
    return NextResponse.json(
      { success: false, message: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
