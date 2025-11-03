import mongoose from "mongoose";
const TourRequestSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    minlength: [2, "Full name must be at least 2 characters long"],
    maxlength: [50, "Full name cannot exceed 50 characters"],
    trim: true,
  },
  contact: {
    type: String,
    required: [true, "Contact number is required"],
    match: [/^\d{10,14}$/, "Please enter a valid contact number"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "Invalid email format"],
    trim: true,
  },
  travellers: {
    type: Number,
    required: [true, "Number of travellers is required"],
    min: [1, "There must be at least 1 traveller"],
  },
  preferredDate: {
    type: String,
    required: [true, "Preferred date is required"],
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, "Duration is required"],
    min: [1, "Duration must be at least 1 day"],
  },
  description: {
    type: String,
    maxlength: [500, "Message cannot exceed 500 characters"],
    trim: true,
  },
  destination: {
    type: String,
    required: [true, "Destination is required"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  ip: {
    type: String
  },
  
});

export default mongoose.models.TourRequest || mongoose.model("TourRequest", TourRequestSchema);
