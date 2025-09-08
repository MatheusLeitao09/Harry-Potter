import express from "express";
import { getAllAnimais, createAnimal, animaisPorId } from "../controllers/animaisController.js";

const router = express.Router();

// Rotas para heróis
router.get("/", getAllAnimais);
router.post("/", createAnimal);
router.get("/:id", animaisPorId);


export default router;