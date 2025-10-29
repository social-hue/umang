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
    // Connect to DB
    await dbConnect();

    // Get IP + UA
    const ipHeader = req.headers.get("x-forwarded-for");
    const ip = ipHeader ? ipHeader.split(",")[0].trim() : (req.headers.get("x-real-ip") || "unknown");
    const userAgent = req.headers.get("user-agent") || "unknown";

    // Rate limiting
    if (isRateLimited(ip)) {
      return new Response(JSON.stringify({ success: false, message: "Too many requests. Please try again later." }), { status: 429, headers: { "Content-Type": "application/json" } });
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return new Response(JSON.stringify({ success: false, message: "Invalid JSON body." }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    // Destructure and basic server-side checks
    const { fullName, contact, preferredDate, travellers, description, destination } = body;

    if (!fullName || typeof fullName !== "string" || validator.isEmpty(fullName.trim())) {
      return new Response(JSON.stringify({ success: false, message: "Full Name is required." }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    if (!contact || typeof contact !== "string" || validator.isEmpty(contact.trim())) {
      return new Response(JSON.stringify({ success: false, message: "Contact is required." }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    if (!destination || typeof destination !== "string" || validator.isEmpty(destination.trim())) {
      return new Response(JSON.stringify({ success: false, message: "Destination is required." }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    // sanitize
    const safeFullName = validator.escape(fullName.trim());
    const safeContact = validator.escape(contact.trim());
    const safePreferredDate = preferredDate ? validator.escape(String(preferredDate).trim()) : "";
    const safeTravellers = travellers && ["0-5", "5-10", "10-15", "more"].includes(travellers) ? travellers : "0-5";
    const safeDescription = description ? validator.escape(String(description).trim()) : "";
    const safeDestination = validator.escape(destination.trim());

    // Build document
    const doc = {
      fullName: safeFullName,
      contact: safeContact,
      preferredDate: safePreferredDate,
      travellers: safeTravellers,
      description: safeDescription,
      destination: safeDestination,
      ip,
      userAgent,
      meta: {
        referer: req.headers.get("referer") || null,
      },
    };

    const created = await TourRequest.create(doc);

    return new Response(JSON.stringify({ success: true, message: "Request received. We'll contact you soon.", data: { id: created._id } }), { status: 201, headers: { "Content-Type": "application/json" } });
  } catch (err) {
    console.error("Error in /api/tour POST:", err);
    return new Response(JSON.stringify({ success: false, message: "Server error. Please try again later." }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
