import mongoose from "mongoose";

const SlotSchema = new mongoose.Schema({
  date: String,         // e.g. "2025-11-12"
  time: String,         // e.g. "10:00 AM"
  available: { type: Boolean, default: true }
});

const ExperienceSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  slots: [SlotSchema]
});

export default mongoose.model("Experience", ExperienceSchema);
