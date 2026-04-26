import express from "express";
import { calculateFatigue } from "./fatigueEngine.js";

const app = express();
const PORT = Number(process.env.FATIGUE_API_PORT || 5000);

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "astronaut-fatigue-api" });
});

app.post("/api/calculate_fatigue", (req, res) => {
  try {
    const payload = req.body || {};
    const parsed = {
      hr: Number(payload.hr ?? 0),
      hrv: Number(payload.hrv ?? 0),
      spo2: Number(payload.spo2 ?? 0),
      sleep: Number(payload.sleep ?? 0),
      activity: Number(payload.activity ?? 0),
    };

    const result = calculateFatigue(parsed);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      error: "Failed to calculate fatigue.",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Fatigue backend running on http://localhost:${PORT}`);
});
