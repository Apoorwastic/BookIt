import express from "express";
import Experience from "../models/Experience.js";

const router = express.Router();

// GET /experiences
router.get("/", async (req, res) => {
  try {
    const items = await Experience.find().lean();
    res.status(200).json(items);
  } catch (err) {
    console.error("Error fetching experiences:", err);
    res.status(500).json({ error: "Server error while fetching experiences" });
  }
});

// GET /experiences/:id
router.get("/:id", async (req, res) => {
  try {
    const item = await Experience.findById(req.params.id).lean();
    if (!item) {
      return res.status(404).json({ error: "Experience not found" });
    }
    res.status(200).json(item);
  } catch (err) {
    console.error("Error fetching experience by ID:", err);
    res.status(500).json({ error: "Server error while fetching experience" });
  }
});

export default router;
