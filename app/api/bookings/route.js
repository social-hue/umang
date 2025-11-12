import dbConnect from "@/db/mongodb";
import Booking from "@/models/Booking";
import validator from "validator";

const rateLimit = new Map();
const WINDOW_TIME = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimit.get(ip) || { count: 0, last: now };  
  if (now - entry.last > WINDOW_TIME) {
    rateLimit.set(ip, { count: 1, last: now });
    return false;
  }
  entry.count++;
  entry.last = now;
  rateLimit.set(ip, entry);
  return entry.count > MAX_REQUESTS;
}

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ error: "Too many requests, please try again later." }), { status: 429 });
  }
  try {
    await dbConnect();
    const body = await req.json();
    const { fullName, contact, preferredDate, travellers, message, tourName, recaptchaToken } = body;
    // ✅ reCAPTCHA verification
    const verification = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: recaptchaToken,
      }),
    });

    const data = await verification.json();
    if (!data.success) {
      return new Response(JSON.stringify({ error: "reCAPTCHA verification failed." }), { status: 403 });
    }

    // ✅ Validate inputs
    if (!fullName || !contact || !preferredDate || !travellers || !tourName) {
      return new Response(JSON.stringify({ error: "All required fields must be filled." }), { status: 400 });
    }
    if (!validator.isLength(fullName, { min: 2, max: 50 })) {
      return new Response(JSON.stringify({ error: "Full name must be 2–50 characters long." }), { status: 400 });
    }
    if (!validator.isMobilePhone(contact + "", "any", { strictMode: false })) {
      return new Response(JSON.stringify({ error: "Please provide a valid contact number." }), { status: 400 });
    }
    if (!validator.isLength(message || "", { max: 300 })) {
      return new Response(JSON.stringify({ error: "Message too long (max 300 chars)." }), { status: 400 });
    }

    const newBooking = await Booking.create({
      fullName: validator.escape(fullName),
      contact: validator.escape(contact),
      preferredDate: validator.escape(preferredDate),
      travellers: validator.escape(travellers),
      message: validator.escape(message || ""),
      tourName: validator.escape(tourName),
    });

    return new Response(JSON.stringify(newBooking), { status: 201 });
  } catch (err) {
    console.error("Error creating booking:", err);
    return new Response(JSON.stringify({ error: "Failed to create booking." }), { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const bookings = await Booking.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(bookings), { status: 200 });
  } catch (err) {
    console.error("Error fetching bookings:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch bookings." }), { status: 500 });
  }
}
