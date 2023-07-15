import express from "express";
import getJobs from "../controllers/jobControllers.js";

const router = express.Router();

router.get("/:size/:page", getJobs);

export default router;
