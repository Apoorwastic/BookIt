import express from "express";
import Experience from "../models/Experience.js";
const router = express.Router();

// GET /experiences
router.get("/", async (req, res) => {
  const items = await Experience.find().lean();
  res.json(items);
});

// GET /experiences/:id
router.get("/:id", async (req, res) => {
  const item = await Experience.findById(req.params.id).lean();
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
});

export default router;
