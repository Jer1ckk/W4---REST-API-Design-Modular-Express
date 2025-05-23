import express from "express";
import {
  getAllJournalists,
  getJournalistById,
  createJournalist,
  updateJournalist,
  deleteJournalist,
  getArticlesByJournalist,
} from "../controllers/journalistsController.js";

const router = express.Router();

router.get("/", getAllJournalists);
router.get("/:id", getJournalistById);
router.post("/", createJournalist);
router.put("/:id", updateJournalist);
router.delete("/:id", deleteJournalist);
router.get("/:id/articles", getArticlesByJournalist);

export default router;
