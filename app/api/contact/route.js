// app/api/contact/route.js
import dbConnect  from "@/db/mongodb";
import Contact from "@/models/Contact";
import sanitizeHtml from "sanitize-html";
import validator from "validator";
import { LRUCache } from "lru-cache";

// Rate limiter: basic in-memory limiter
// For production use Redis-based limiter (e.g., rate-limiter-flexible) across instances.
const rateLimitCache = new LRUCache({
  max: 5000,
  ttl: 1000 * 60, // 1 minute window
});

function rateLimit(key, limit = 6) {
  // returns { allowed: boolean, remaining: number }
  const entry = rateLimitCache.get(key) || { count: 0 };
  entry.count += 1;
  rateLimitCache.set(key, entry);
  return {
    allowed: entry.count <= limit,
    remaining: Math.max(0, limit - entry.count),
    count: entry.count,
  };
}

function sanitizeString(input) {
  // remove tags, attributes — keep plain text
  return sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} }).trim();
}

export async function POST(req) {
  try {
    // Basic content-type check
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return new Response(JSON.stringify({ error: "Invalid Content-Type" }), { status: 415 });
    }

    // limit request size (approximate): read body with json() but you can also stream/time out connections
    const body = await req.json();

    // Rate limiting by IP
    const ip = req.headers.get("x-forwarded-for") || req.ip || req.headers.get("x-real-ip") || "unknown";
    const rl = rateLimit(`contact:${ip}`, 6);
    if (!rl.allowed) {
      return new Response(JSON.stringify({ error: "Too many requests. Please wait." }), { status: 429 });
    }

    // Extract and validate fields (whitelist only expected fields)
    const rawName = (body.name || "").toString();
    const rawEmail = (body.email || "").toString();
    const rawNumber = (body.number || "").toString();
    const rawMessage = (body.message || "").toString();

    if (!rawName || !rawEmail || !rawNumber || !rawMessage) {
      return new Response(JSON.stringify({ error: "All fields are required." }), { status: 400 });
    }

    // Validate email
    if (!validator.isEmail(rawEmail)) {
      return new Response(JSON.stringify({ error: "Invalid email address." }), { status: 400 });
    }

    // Basic phone validation (accepts digits, +, spaces, hyphens)
    const normalizedNumber = rawNumber.replace(/[^\d+]/g, "");
    if (!validator.isLength(normalizedNumber, { min: 7, max: 14 })) {
      return new Response(JSON.stringify({ error: "Invalid phone number." }), { status: 400 });
    }

    // length checks to avoid huge payloads
    if (rawName.length > 100 || rawMessage.length > 800) {
      return new Response(JSON.stringify({ error: "Payload too large." }), { status: 413 });
    }

    // Sanitize input to strip any markup
    const name = sanitizeString(rawName).slice(0, 100);
    const email = validator.normalizeEmail(rawEmail);
    const number = sanitizeString(normalizedNumber).slice(0, 30);
    const message = sanitizeString(rawMessage).slice(0, 800);

    // connect to DB
    await dbConnect();

    // Save minimal info + IP / UA for audit
    const saved = await Contact.create({
      name,
      email,
      number,
      message,
      ip,
      userAgent: req.headers.get("user-agent") || "",
    });

    // security response headers
    const headers = {
      "Content-Type": "application/json",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "Referrer-Policy": "no-referrer",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
      "Feature-Policy": "vibrate 'none'",
      // optional CORS header (restrict in production)
      "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN || "*",
    };

    return new Response(JSON.stringify({ success: true, id: saved._id }), {
      status: 201,
      headers,
    });
  } catch (err) {
    console.error("Contact API error:", err);
    const headers = { "Content-Type": "application/json" };
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers,
    });
  }
}
