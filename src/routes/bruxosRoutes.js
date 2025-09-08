import express from "express";
import { getAllBruxos, createBruxo, bruxosPorId } from "../controllers/bruxosController.js";

const router = express.Router();

// Rotas para heróis
router.get("/", getAllBruxos);
router.post("/", createBruxo);
router.get("/:id", bruxosPorId)

export default router;