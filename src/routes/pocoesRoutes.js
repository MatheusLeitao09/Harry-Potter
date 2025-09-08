import express from "express";
import { getAllPocoes, createPocao, pocoesPorId } from "../controllers/pocoesContoller.js";

const router = express.Router();

// Rotas para heróis
router.get("/", getAllPocoes);
router.post("/", createPocao);
router.get("/:id", pocoesPorId)
export default router;