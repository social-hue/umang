import crypto from "crypto";
import { NextResponse } from "next/server";

export async function GET() {
  const token = crypto.randomBytes(32).toString("hex"); // generate random CSRF token
  return NextResponse.json({ token });
}
