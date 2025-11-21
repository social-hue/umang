// import dbConnect from "@/db/mongodb";
// import PartnerForm from "@/models/PartnerForm";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { company_name, contact_person, contact_number, email, designation, message } = body;

//     // ✅ Validation
//     if (!company_name || !contact_person || !contact_number || !email) {
//       return new Response(
//         JSON.stringify({ error: "Please fill all required fields." }),
//         { status: 400 }
//       );
//     }

//     // ✅ Connect to DB
//     await dbConnect();

//     // ✅ Save form
//     const newPartner = await PartnerForm.create({
//       company_name,
//       contact_person,
//       contact_number,
//       email,
//       designation,
//       message,
//     });

//     // ✅ Success response
//     return new Response(
//       JSON.stringify({
//         success: true,
//         message: "Form submitted successfully!",
//         data: newPartner,
//       }),
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("❌ Error saving Partner Form:", error);
//     return new Response(
//       JSON.stringify({ error: "Something went wrong, please try again." }),
//       { status: 500 }
//     );
//   }
// }


import dbConnect from "@/db/mongodb";
import { NextResponse } from "next/server";
import sanitizeHtml from "sanitize-html";
import validator from "validator";
import PartnerForm from "@/models/PartnerForm";
import { LRUCache } from "lru-cache";

// LRU cache-based IP rate limiter
const rateLimitCache = new LRUCache({ max: 5000, ttl: 1000 * 60 });

function rateLimit(key, limit = 5) {
  const entry = rateLimitCache.get(key) || { count: 0 };
  entry.count += 1;
  rateLimitCache.set(key, entry);
  return { allowed: entry.count <= limit };
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
    const {
      name,
      mobile,
      email,
      city,
      honeypot,
      recaptchaToken
    } = body;

    // Honeypot — bot detected
    if (honeypot) {
      return NextResponse.json({ success: false, message: "Bot detected." }, { status: 400 });
    }

    // Required fields
    if (!name || !mobile || !email || !city) {
      return NextResponse.json({ success: false, message: "Please fill all required fields." }, { status: 400 });
    }

    // Missing recaptcha
    if (!recaptchaToken) {
      return NextResponse.json({ success: false, message: "Missing reCAPTCHA token." }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ||
               req.headers.get("x-real-ip") ||
               "Unknown";

    // Rate limit
    const rl = rateLimit(`partner:${ip}`, 5);
    if (!rl.allowed) {
      return NextResponse.json({ success: false, message: "Too many requests. Try later." }, { status: 429 });
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
      return NextResponse.json({ success: false, message: "reCAPTCHA validation failed." }, { status: 403 });
    }

    // Validation
    if (!validator.isLength(name, { min: 3, max: 100 })) {
      return NextResponse.json({ success: false, message: "Name must be 3–100 characters." }, { status: 400 });
    }

    if (!validator.isEmail(email)) {
      return NextResponse.json({ success: false, message: "Invalid email format." }, { status: 400 });
    }

    const cleanedMobile = mobile.replace(/[^\d+]/g, "");
    if (!validator.isLength(cleanedMobile, { min: 10, max: 14 })) {
      return NextResponse.json({ success: false, message: "Invalid mobile number." }, { status: 400 });
    }

    if (!validator.isLength(city, { min: 2, max: 50 })) {
      return NextResponse.json({ success: false, message: "City name is too short." }, { status: 400 });
    }

    // DB Connect
    await dbConnect();
    // Save to DB
    const created = await PartnerForm.create({
      name: sanitizeString(name),
      mobile: sanitizeString(cleanedMobile),
      email: validator.normalizeEmail(email),
      city: sanitizeString(city),
      ip,
      userAgent: req.headers.get("user-agent") || "Unknown",
    });

    return NextResponse.json(
      { success: true, message: "Form submitted successfully!", id: created._id },
      { status: 201 }
    );

  } catch (error) {
    console.error("Partner Form Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
