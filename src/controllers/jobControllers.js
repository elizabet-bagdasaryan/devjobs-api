import Job from "../models/job.js";

export const getJobs = async (req, res) => {
  try {
    const { page = 1, size = 10 } = req.params;
    const limit = parseInt(size);
    const skip = (parseInt(page) - 1) * limit;
    const data = await Job.find().skip(skip).limit(limit);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while retrieving the job postings.",
    });
  }
};
