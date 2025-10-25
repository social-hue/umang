import dbConnect from "@/db/mongodb";
import { NextResponse } from "next/server";
// import Appointment from "@/models/FinanceForm";
import FinanceForm from "@/models/FinanceForm";
      
export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const { fullName, email, phone, message } = body;
    if (!fullName || !email || !phone)
      return NextResponse.json(
        { success: false, message: "Please fill all required fields." },
        { status: 400 }
      );
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "Unknown";
    const userAgent = req.headers.get("user-agent") || "Unknown";

    const appointment = await FinanceForm.create({
      fullName,
      email,
      phone,
      message,
      ip,
      userAgent,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Appointment booked successfully!",
        data: { id: appointment._id },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating appointment:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}