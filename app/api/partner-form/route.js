import dbConnect from "@/db/mongodb";
import PartnerForm from "@/models/PartnerForm";

export async function POST(req) {
  try {
    const body = await req.json();
    const { company_name, contact_person, contact_number, email, designation, message } = body;

    // ✅ Validation
    if (!company_name || !contact_person || !contact_number || !email) {
      return new Response(
        JSON.stringify({ error: "Please fill all required fields." }),
        { status: 400 }
      );
    }

    // ✅ Connect to DB
    await dbConnect();

    // ✅ Save form
    const newPartner = await PartnerForm.create({
      company_name,
      contact_person,
      contact_number,
      email,
      designation,
      message,
    });

    // ✅ Success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully!",
        data: newPartner,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Error saving Partner Form:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong, please try again." }),
      { status: 500 }
    );
  }
}
