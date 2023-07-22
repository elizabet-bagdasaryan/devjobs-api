import { getJobs } from "../controllers/jobControllers.js";
import express from "express";

export const router = express.Router();
router.get("/:size/:page", getJobs);
