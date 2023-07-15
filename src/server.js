import express from "express";
import jobRoutes from "./routes/jobRoutes.js";
import { connection } from "./mongo.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

connection();

app.use(express.json());

app.use("/jobs", jobRoutes);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
