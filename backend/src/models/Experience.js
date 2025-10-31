import mongoose from "mongoose";

const SlotSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true, // e.g., "2025-11-12"
  },
  time: {
    type: String,
    required: true, // e.g., "10:00 AM"
  },
  available: {
    type: Boolean,
    default: true,
  },
});

// 🎯 Experience Schema
const ExperienceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      default: "Adventure",
      trim: true,
    },
    duration: {
      type: String,
      default: "2 hours",
      trim: true,
    },
    difficulty: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    included: {
      type: [String],
      default: ["Professional Guide", "Safety Equipment"],
    },
    safetyInfo: {
      type: String,
      default:
        "All experiences are supervised by certified professionals. Safety gear is mandatory and provided.",
    },
    about: {
      type: String,
      default:
        "Immerse yourself in an unforgettable experience carefully designed to balance thrill, relaxation, and safety. Suitable for all age groups with prior briefing and assistance included.",
    },
    slots: [SlotSchema],
  },
  { timestamps: true } // Adds createdAt, updatedAt
);

export default mongoose.model("Experience", ExperienceSchema);
