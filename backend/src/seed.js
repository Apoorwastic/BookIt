import mongoose from "mongoose";
import dotenv from "dotenv";
import Experience from "./models/Experience.js";

dotenv.config();

const MONGO = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/bookit";

// Base experiences (generic)
const baseExperiences = [
  {
    title: "Sunset Kayaking",
    description:
      "Glide across calm golden waters as the sun dips below the horizon. This relaxing sunset kayaking experience offers breathtaking views, gentle breezes, and the perfect setting to unwind after a long day. No prior experience required – all gear and safety instructions included.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 799,
    slots: [
      { date: "2025-11-10", time: "04:30 PM", available: true },
      { date: "2025-11-10", time: "05:00 PM", available: true },
      { date: "2025-11-10", time: "05:30 PM", available: true },
      { date: "2025-11-10", time: "06:00 PM", available: true },
      { date: "2025-11-11", time: "04:30 PM", available: true },
      { date: "2025-11-11", time: "05:00 PM", available: true },
      { date: "2025-11-11", time: "05:30 PM", available: true },
      { date: "2025-11-11", time: "06:00 PM", available: true }
    ]
  },
  {
    title: "Mountain Hiking",
    description:
      "Experience an exhilarating hike through lush forests and rocky trails. Our guided mountain trek includes scenic viewpoints, a refreshing picnic stop, and plenty of photo opportunities. Suitable for beginners and experienced hikers alike with professional guides ensuring your safety.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    price: 1299,
    slots: [
      { date: "2025-11-12", time: "06:30 AM", available: true },
      { date: "2025-11-12", time: "07:00 AM", available: true },
      { date: "2025-11-12", time: "07:30 AM", available: true },
      { date: "2025-11-12", time: "08:00 AM", available: true },
      { date: "2025-11-13", time: "06:30 AM", available: true },
      { date: "2025-11-13", time: "07:00 AM", available: true },
      { date: "2025-11-13", time: "07:30 AM", available: true },
      { date: "2025-11-13", time: "08:00 AM", available: true }
    ]
  },
  {
    title: "Beach Yoga Retreat",
    description:
      "Awaken your senses with a rejuvenating sunrise yoga session by the sea. Let the sound of waves guide your breathing as expert instructors help you find balance, peace, and inner calm. Includes herbal tea, beach mat, and a mindfulness workshop.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    price: 999,
    slots: [
      { date: "2025-11-15", time: "05:30 AM", available: true },
      { date: "2025-11-15", time: "06:00 AM", available: true },
      { date: "2025-11-15", time: "06:30 AM", available: true },
      { date: "2025-11-15", time: "07:00 AM", available: true },
      { date: "2025-11-16", time: "05:30 AM", available: true },
      { date: "2025-11-16", time: "06:00 AM", available: true },
      { date: "2025-11-16", time: "06:30 AM", available: true },
      { date: "2025-11-16", time: "07:00 AM", available: true }
    ]
  },
  {
    title: "Hot Air Balloon Ride",
    description:
      "Soar above rolling hills and picturesque landscapes in a magical hot air balloon ride. Capture stunning sunrise views, enjoy a peaceful floating experience, and toast the adventure with complimentary refreshments upon landing.",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
    price: 2499,
    slots: [
      { date: "2025-11-18", time: "05:00 AM", available: true },
      { date: "2025-11-18", time: "05:30 AM", available: true },
      { date: "2025-11-18", time: "06:00 AM", available: true },
      { date: "2025-11-18", time: "06:30 AM", available: true },
      { date: "2025-11-19", time: "05:00 AM", available: true },
      { date: "2025-11-19", time: "05:30 AM", available: true },
      { date: "2025-11-19", time: "06:00 AM", available: true },
      { date: "2025-11-19", time: "06:30 AM", available: true }
    ]
  },
  {
    title: "Wine Tasting Tour",
    description:
      "Embark on a flavorful journey through lush vineyards with our exclusive wine tasting experience. Learn about grape varieties, fermentation, and pairing techniques from expert sommeliers while enjoying a scenic countryside setting.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    price: 1599,
    slots: [
      { date: "2025-11-20", time: "02:00 PM", available: true },
      { date: "2025-11-20", time: "02:30 PM", available: true },
      { date: "2025-11-20", time: "03:00 PM", available: true },
      { date: "2025-11-20", time: "03:30 PM", available: true },
      { date: "2025-11-21", time: "02:00 PM", available: true },
      { date: "2025-11-21", time: "02:30 PM", available: true },
      { date: "2025-11-21", time: "03:00 PM", available: true },
      { date: "2025-11-21", time: "03:30 PM", available: true }
    ]
  }
];

// Add 3 locations per experience
const locations = ["Goa", "Manali", "Jaipur"];

const examples = [];

for (const exp of baseExperiences) {
  for (const loc of locations) {
    examples.push({
      ...exp,
      title: `${exp.title} – ${loc}`,
      location: loc
    });
  }
}

async function seed() {
  await mongoose.connect(MONGO);
  await Experience.deleteMany({});
  await Experience.insertMany(examples);
  console.log(`✅ Seeded ${examples.length} detailed experiences across ${locations.length} Indian locations!`);
  process.exit(0);
}

seed();
