// app/api/finance/route.js
import dbConnect from "@/db/mongodb";
import { NextResponse } from "next/server";
import sanitizeHtml from "sanitize-html";
import validator from "validator";
import { LRUCache } from "lru-cache";
import FinanceForm from "@/models/FinanceForm";

// Basic in-memory rate limiter (per-IP). For production use Redis.
const rateLimitCache = new LRUCache({ max: 5000, ttl: 1000 * 60 }); // 1 minute

function rateLimit(key, limit = 6) {
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
    // Ensure JSON
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ success: false, message: "Invalid Content-Type" }, { status: 415 });
    }

    const body = await req.json();
    // Expect recaptchaToken from client
    const { fullName, email, phone, message, recaptchaToken, honeypot } = body;

    // Basic bot/honeypot check
    if (honeypot && honeypot.trim() !== "") {
      return NextResponse.json({ success: false, message: "Bot detected." }, { status: 400 });
    }

    // Basic required fields
    if (!fullName || !email || !phone) {
      return NextResponse.json({ success: false, message: "Please fill all required fields." }, { status: 400 });
    }

    // Verify reCAPTCHA token with Google
    if (!recaptchaToken) {
      return NextResponse.json({ success: false, message: "Missing reCAPTCHA token." }, { status: 400 });
    }

    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY || "",
        response: recaptchaToken,
      }),
    });

    const verifyData = await verifyRes.json();
    // Log verifyData for debugging — remove or reduce in production if verbose
    console.log("Finance form reCAPTCHA verify:", verifyData);

    // For v2 invisible: verifyData.success must be true
    if (!verifyData || !verifyData.success) {
      return NextResponse.json({ success: false, message: "reCAPTCHA verification failed." }, { status: 403 });
    }

    // Rate limiting (by IP)
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.headers.get("x-real-ip") || "Unknown";
    const rl = rateLimit(`finance:${ip}`, 6);
    if (!rl.allowed) {
      return NextResponse.json({ success: false, message: "Too many requests. Please wait." }, { status: 429 });
    }

    // Validate email
    if (!validator.isEmail(String(email))) {
      return NextResponse.json({ success: false, message: "Invalid email address." }, { status: 400 });
    }

    // Normalize/validate phone (allow digits and +, basic length)
    const normalizedPhone = String(phone).replace(/[^\d+]/g, "");
    if (!validator.isLength(normalizedPhone, { min: 7, max: 20 })) {
      return NextResponse.json({ success: false, message: "Invalid phone number." }, { status: 400 });
    }

    // Sanitize inputs
    const cleanFullName = sanitizeString(fullName).slice(0, 150);
    const cleanEmail = validator.normalizeEmail(String(email));
    const cleanPhone = sanitizeString(normalizedPhone).slice(0, 30);
    const cleanMessage = sanitizeString(message || "").slice(0, 1000);

    // Connect DB and save
    await dbConnect();
    const created = await FinanceForm.create({
      fullName: cleanFullName,
      email: cleanEmail,
      phone: cleanPhone,
      message: cleanMessage,
      ip,
      userAgent: req.headers.get("user-agent") || "Unknown",
    });

    return NextResponse.json(
      { success: true, message: "Appointment booked successfully!", data: { id: created._id } },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating finance appointment:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
