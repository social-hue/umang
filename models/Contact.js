// models/Contact.js
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    number: { type: String, required:true, trim: true },
    message: { type: String, required: true, trim: true },
    ip: { type: String }, // store client IP (optional)
    userAgent: { type: String }, // store UA (optional)
  },
  { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
