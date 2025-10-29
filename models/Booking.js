import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  contact: { type: String, required: true },
  preferredDate: { type: String, required: true },
  travellers: { type: String, required: true },
  message: { type: String },
  tourName: { type: String, required: true }, // ✅ new field
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
