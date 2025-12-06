import mongoose, { Schema } from "mongoose";

const ApplyFormSchema = new Schema(
  {
    fullName: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    experience: { type: String },
    jobTitle: { type: String, required: true }, // from props
    ip: String,
    userAgent: String,
  },
  { timestamps: true }
);

export default mongoose.models.ApplyForm ||
  mongoose.model("ApplyForm", ApplyFormSchema);
