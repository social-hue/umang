import mongoose from "mongoose";

const MemberRequestSchema = new mongoose.Schema(
  {
    membershipId: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 64,
      match: /^[A-Za-z0-9\-_\/\\]+$/, // allows letters, numbers, -, _, /, \
    },
    ip: { type: String, required: true },
    userAgent: { type: String },
    createdAt: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["pending", "processed", "rejected"],
      default: "pending",
    },
    meta: { type: mongoose.Schema.Types.Mixed },
  },
  { strict: true }
);

// Prevent model overwrite in dev hot reload
export default mongoose.models.MemberRequest ||
  mongoose.model("MemberRequest", MemberRequestSchema);