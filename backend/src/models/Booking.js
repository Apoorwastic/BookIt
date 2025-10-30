import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  experienceId: { type: mongoose.Schema.Types.ObjectId, ref: "Experience" },
  name: String,
  email: String,
  date: String,
  time: String,
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Booking", BookingSchema);
