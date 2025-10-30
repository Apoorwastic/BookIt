import mongoose from "mongoose";
import dotenv from "dotenv";
import Experience from "./models/Experience.js";
dotenv.config();

const MONGO = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/bookit";
const examples = [
  {
    title: "Sunset Kayaking",
    description: "Enjoy a serene sunset kayaking experience on calm waters.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 799,
    slots: [
      { date: "2025-11-10", time: "06:00 PM", available: true },
      { date: "2025-11-11", time: "06:00 PM", available: true }
    ]
  },
  {
    title: "Mountain Hiking",
    description: "A guided day-hike with scenic views and a picnic.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    price: 1299,
    slots: [
      { date: "2025-11-12", time: "07:00 AM", available: true },
      { date: "2025-11-13", time: "07:00 AM", available: true }
    ]
  }
];

async function seed() {
  await mongoose.connect(MONGO);
  await Experience.deleteMany({});
  await Experience.insertMany(examples);
  console.log("Seeded experiences");
  process.exit(0);
}
seed();
