import { sendEmailto } from "../controllers/emailControllers.js";
import express from "express";

export const sendEmailroute =  express.Router()
sendEmailroute.post("/sendemail", sendEmailto);