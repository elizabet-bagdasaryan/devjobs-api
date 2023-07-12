import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
