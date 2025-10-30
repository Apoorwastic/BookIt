import express from "express";
const router = express.Router();

// POST /promo/validate
router.post("/validate", (req, res) => {
  const { code } = req.body;
  if (!code) return res.json({ valid: false });

  const standardized = code.trim().toUpperCase();
  const coupons = {
    "SAVE10": { type: "percent", value: 10 },
    "FLAT100": { type: "flat", value: 100 }
  };
  const match = coupons[standardized];
  if (!match) return res.json({ valid: false });
  res.json({ valid: true, coupon: match });
});

export default router;
