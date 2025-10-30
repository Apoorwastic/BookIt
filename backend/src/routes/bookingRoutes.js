import express from "express";
import Booking from "../models/Booking.js";
import Experience from "../models/Experience.js";
const router = express.Router();

// POST /bookings
router.post("/", async (req, res) => {
  const { experienceId, name, email, date, time } = req.body;
  if (!experienceId || !name || !email || !date || !time)
    return res.status(400).json({ error: "Missing fields" });

  // Prevent double-booking: check if slot already booked
  const existing = await Booking.findOne({ experienceId, date, time });
  if (existing) return res.status(409).json({ error: "Slot already booked" });

  // Mark slot unavailable in Experience (simple approach)
  const exp = await Experience.findById(experienceId);
  if (!exp) return res.status(404).json({ error: "Experience not found" });

  const slot = exp.slots.find(s => s.date === date && s.time === time);
  if (!slot || slot.available === false) return res.status(409).json({ error: "Slot unavailable" });
  // mark unavailable
  slot.available = false;
  await exp.save();

  const booking = await Booking.create({ experienceId, name, email, date, time, totalPrice: exp.price });
  res.json({ success: true, booking });
});

export default router;
