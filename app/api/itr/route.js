import dbConnect from "@/db/mongodb";
import MemberRequest from "@/models/MemberRequest";
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
    const ip = ipHeader ? ipHeader.split(",")[0].trim() : "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ ok: false, message: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json" } }
      );
    }

    const body = await req.json();
    const { membershipId } = body || {};

    if (!membershipId || typeof membershipId !== "string") {
      return new Response(
        JSON.stringify({ ok: false, message: "Membership ID is required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const cleaned = membershipId.trim();
    if (cleaned.length < 3 || cleaned.length > 64) {
      return new Response(
        JSON.stringify({ ok: false, message: "Membership ID must be 3–64 characters long." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const regex = /^[A-Za-z0-9\-_\/\\]+$/;
    if (!regex.test(cleaned)) {
      return new Response(
        JSON.stringify({ ok: false, message: "Invalid characters in Membership ID." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const safeId = cleaned;

    await MemberRequest.create({
      membershipId: safeId,
      ip,
      userAgent,
      status: "pending",
      meta: { referrer: req.headers.get("referer") || null },
    });

    return new Response(
      JSON.stringify({ ok: true, message: "Thanks — we received your request and will reach out shortly." }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error in /api/itr:", err);
    return new Response(
      JSON.stringify({ ok: false, message: "Server error. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}