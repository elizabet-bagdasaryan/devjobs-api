import express from "express";
import mongoose from "mongoose";
import jobRoutes from "./routes/jobRoutes";

const app = express();

mongoose.connect("mongodb://localhost/jobDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/jobs", jobRoutes);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
