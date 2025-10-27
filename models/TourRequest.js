// models/TourRequest.js
import mongoose from "mongoose";

const TourRequestSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 120,
    },
    contact: {
      type: String,
      required: true,
      trim: true,
      match: /^[0-9+\-\s()]{6,30}$/, // basic phone validation
    },
    preferredDate: {
      type: String,
      trim: true,
      maxlength: 40,
    },
    travellers: {
      type: String,
      enum: ["0-5", "5-10", "10-15", "more"],
      default: "0-5",
    },
    description: {
      type: String,
      trim: true,
      maxlength: 1000,
    },
    destination: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    ip: { type: String, required: true },
    userAgent: { type: String },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, enum: ["pending", "contacted", "cancelled"], default: "pending" },
    meta: { type: mongoose.Schema.Types.Mixed },
  },
  { strict: true }
);

// Prevent model overwrite upon hot reloads
export default mongoose.models.TourRequest || mongoose.model("TourRequest", TourRequestSchema);
