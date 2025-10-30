import dbConnect from "@/db/mongodb";
import Contact from "@/models/Contact";
import sanitizeHtml from "sanitize-html";
import validator from "validator";
import { LRUCache } from "lru-cache";

const rateLimitCache = new LRUCache({ max: 5000, ttl: 1000 * 60 });

function rateLimit(key, limit = 6) {
  const entry = rateLimitCache.get(key) || { count: 0 };
  entry.count += 1;
  rateLimitCache.set(key, entry);
  return { allowed: entry.count <= limit, remaining: Math.max(0, limit - entry.count) };
}

function sanitizeString(input) {
  return sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} }).trim();
}

export async function POST(req) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json"))
      return new Response(JSON.stringify({ error: "Invalid Content-Type" }), { status: 415 });

    const body = await req.json();

    const { name, email, number, message, recaptchaToken } = body;
    if (!name || !email || !number || !message)
      return new Response(JSON.stringify({ error: "All fields are required." }), { status: 400 });

    // ✅ Verify Google reCAPTCHA v2 invisible
    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: recaptchaToken,
      }),
    });

    const verifyData = await verifyRes.json();
    if (!verifyData.success || verifyData.score < 0.4) {
      return new Response(JSON.stringify({ error: "reCAPTCHA verification failed." }), { status: 403 });
    }

    // Rate Limit
    const ip = req.headers.get("x-forwarded-for") || req.ip || "unknown";
    const rl = rateLimit(`contact:${ip}`, 6);
    if (!rl.allowed)
      return new Response(JSON.stringify({ error: "Too many requests. Please wait." }), { status: 429 });

    // Validation
    if (!validator.isEmail(email))
      return new Response(JSON.stringify({ error: "Invalid email address." }), { status: 400 });

    const normalizedNumber = number.replace(/[^\d+]/g, "");
    if (!validator.isLength(normalizedNumber, { min: 7, max: 14 }))
      return new Response(JSON.stringify({ error: "Invalid phone number." }), { status: 400 });

    const cleanData = {
      name: sanitizeString(name).slice(0, 100),
      email: validator.normalizeEmail(email),
      number: sanitizeString(normalizedNumber).slice(0, 30),
      message: sanitizeString(message).slice(0, 800),
    };

    await dbConnect();
    const saved = await Contact.create({ ...cleanData, ip, userAgent: req.headers.get("user-agent") || "" });

    const headers = {
      "Content-Type": "application/json",
      "X-Frame-Options": "DENY",
      "Referrer-Policy": "no-referrer",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
      "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN || "*",
    };

    return new Response(JSON.stringify({ success: true, id: saved._id }), { status: 201, headers });
  } catch (err) {
    console.error("Contact API error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
