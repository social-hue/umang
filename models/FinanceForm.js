import mongoose from "mongoose";

const FinanceFormSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: /^[0-9+\-\s()]{6,20}$/,
    },
    message: {
      type: String,
      trim: true,
      maxlength: 300,
    },
    ip: { type: String, required: true },
    userAgent: { type: String },
    createdAt: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { strict: true }
);

export default mongoose.models.FinanceForm ||
  mongoose.model("FinanceForm", FinanceFormSchema);