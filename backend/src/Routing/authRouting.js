import { signup } from "../controllers/authControllers.js";
import { login } from "../controllers/authControllers.js";
import { getCurrentUser } from "../controllers/authControllers.js";
import express from "express"

export const authRouter=express.Router()


authRouter.post("/signup",signup)
authRouter.post("/login",login)
authRouter.get("/user", getCurrentUser)