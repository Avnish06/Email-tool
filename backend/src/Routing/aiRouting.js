import express from "express";
import { generateAITemplate } from "../controllers/ai.controller.js";

const aiRouter = express.Router();

aiRouter.post("/generate", generateAITemplate);

export { aiRouter };
