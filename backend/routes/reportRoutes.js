import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  saveReport,
  getMyReports,
  deleteReport,
} from "../controllers/reportController.js";

const router = express.Router();

router.post("/", protect, saveReport);

router.get("/", protect, getMyReports);

router.delete("/:id", protect, deleteReport);

export default router;