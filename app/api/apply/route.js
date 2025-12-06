import dbConnect from "@/db/mongodb";
import { NextResponse } from "next/server";
import sanitizeHtml from "sanitize-html";
import validator from "validator";
import ApplyForm from "@/models/ApplyForm";
import { LRUCache } from "lru-cache";

// Rate limiter
const rateLimitCache = new LRUCache({ max: 5000, ttl: 60 * 1000 });

function rateLimit(key, limit = 5) {
  const entry = rateLimitCache.get(key) || { count: 0 };
  entry.count += 1;
  rateLimitCache.set(key, entry);
  return entry.count <= limit;
}

const clean = (str) =>
  sanitizeHtml(String(str || ""), { allowedTags: [], allowedAttributes: {} }).trim();

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, contact, email, experience, jobTitle, honeypot, recaptchaToken } = body;

    if (honeypot) {
      return NextResponse.json({ success: false, message: "Bot detected." }, { status: 400 });
    }

    if (!fullName || !email || !contact || !jobTitle)
      return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });

    if (!recaptchaToken)
      return NextResponse.json({ success: false, message: "Missing reCAPTCHA." }, { status: 400 });

    const ip = req.headers.get("x-real-ip") ||
               req.headers.get("x-forwarded-for")?.split(",")[0] ||
               "Unknown";

    if (!rateLimit(`apply:${ip}`, 5))
      return NextResponse.json({ success: false, message: "Too many requests. Try later." }, { status: 429 });

    // Validate
    if (!validator.isLength(fullName, { min: 2, max: 50 }))
      return NextResponse.json({ success: false, message: "Full name must be 2–50 characters." }, { status: 400 });

    if (!validator.isEmail(email))
      return NextResponse.json({ success: false, message: "Invalid email format." }, { status: 400 });

    if (!validator.isMobilePhone(contact, "any"))
      return NextResponse.json({ success: false, message: "Invalid contact number." }, { status: 400 });

    // Verify reCAPTCHA
    const verify = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY || "",
          response: recaptchaToken,
        }),
      }
    ).then((r) => r.json());

    if (!verify.success)
      return NextResponse.json({ success: false, message: "reCAPTCHA failed." }, { status: 403 });

    await dbConnect();
    await ApplyForm.create({
      fullName: clean(fullName),
      contact: clean(contact),
      email: validator.normalizeEmail(email),
      experience: clean(experience),
      jobTitle: clean(jobTitle),
      ip,
      userAgent: req.headers.get("user-agent") || "Unknown",
    });

    return NextResponse.json({ success: true, message: "Application submitted successfully!" }, { status: 201 });

  } catch (err) {
    console.error("Apply Form Error:", err);
    return NextResponse.json({ success: false, message: "Server error. Try again later." }, { status: 500 });
  }
}
