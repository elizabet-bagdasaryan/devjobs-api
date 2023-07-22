import express from "express";
import { router } from "./routes/jobRoutes.js";
import { connection } from "./mongo.js";
import dotenv from "dotenv";
import fs from "fs";
import Job from "./models/job.js";

const app = express();

dotenv.config();

(async () => {
  try {
    await connection();
    await Job.deleteMany({});

    const data = JSON.parse(fs.readFileSync("data.json"));
    await Job.insertMany(data);
    console.log(data.length, "documents inserted.");
  } catch (error) {
    console.error("Error inserting data into MongoDB:", error);
  }

  app.use(express.json());
  app.use("/jobs", router);

  app.listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
})();
