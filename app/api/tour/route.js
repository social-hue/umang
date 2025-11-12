import dbConnect from "@/db/mongodb";
import TourRequest from "@/models/TourRequest";
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
    return new Response(
      JSON.stringify({ error: "Too many requests, please try again later." }),
      { status: 429 }
    );
  }
  try {
    await dbConnect();
    const body = await req.json();
    const {
      fullName,
      contact,
      email,
      preferredDate,
      travellers,
      duration,
      description,
      destination,
      recaptchaToken,
    } = body;

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
      return new Response(
        JSON.stringify({ error: "You already submitted once, Please try again later." }),
        { status: 403 }
      );
    }

    // ✅ Validate inputs
    if (!fullName || !contact || !email || !preferredDate || !travellers || !duration || !destination) {
      return new Response(
        JSON.stringify({ error: "All required fields must be filled." }),
        { status: 400 }
      );
    }

    if (!validator.isLength(fullName, { min: 2, max: 50 }) || !/^[A-Za-z\s]+$/.test(fullName)) {
      return new Response(
        JSON.stringify({ error: "Full name must contain only letters and be 2–50 characters long." }),
        { status: 400 }
      );
    }

    if (!validator.isMobilePhone(contact + "", "any", { strictMode: false })) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid contact number." }),
        { status: 400 }
      );
    }

    if (!validator.isEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address." }),
        { status: 400 }
      );
    }

    if (isNaN(travellers) || travellers <= 0) {
      return new Response(
        JSON.stringify({ error: "Travellers count must be a positive number." }),
        { status: 400 }
      );
    }

    if (isNaN(duration) || duration <= 0) {
      return new Response(
        JSON.stringify({ error: "Duration must be a positive number." }),
        { status: 400 }
      );
    }

    // ✅ Create sanitized record
    const newBooking = await TourRequest.create({
      fullName: validator.escape(fullName.trim()),
      contact: validator.escape(contact.trim()),
      email: validator.normalizeEmail(email.trim()),
      preferredDate: validator.escape(preferredDate.trim()),
      travellers: Number(travellers),
      duration: Number(duration),
      description: description.trim(),
      destination: validator.escape(destination.trim()),
      ip: ip,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Tour request submitted successfully.",
        data: { id: newBooking._id },
      }),
      { status: 201 }
    );
  } catch (err) {
    console.error("Error creating booking:", err);
    return new Response(
      JSON.stringify({ error: "Failed to create booking." }),
      { status: 500 }
    );
  }
}


