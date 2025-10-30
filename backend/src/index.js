import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import experienceRoutes from "./routes/experienceRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import promoRoutes from "./routes/promoRoutes.js";

dotenv.config();
const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(express.json());

// Routes
app.use("/experiences", experienceRoutes);
app.use("/bookings", bookingRoutes);
app.use("/promo", promoRoutes);

const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/bookit";

mongoose.connect(MONGO)
  .then(()=> {
    console.log("MongoDB connected");
    app.listen(PORT, ()=> console.log("Server running on port", PORT));
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
