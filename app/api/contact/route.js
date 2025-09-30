// app/api/contact/route.js
import dbConnect from "@/db/mongodb";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    await dbConnect();

    const newContact = await Contact.create({ name, email, message });

    return new Response(JSON.stringify({ success: true, data: newContact }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
