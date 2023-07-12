import express from "express";
const jobController = require("../controllers/jobController");

const router = express.Router();

router.get("/:size/:page", jobController.getJobs);

export default router;
