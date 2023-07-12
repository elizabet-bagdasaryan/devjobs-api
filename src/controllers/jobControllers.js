import Job from "../models/job";

exports.getJobs = async (req, res) => {
  const { size, page } = req.params;
  const pageSize = parseInt(size);
  const pageNumber = parseInt(page);

  try {
    const totalJobsCount = await Job.countDocuments();
    const totalPages = Math.ceil(totalJobsCount / pageSize);

    if (pageNumber < 1 || pageNumber > totalPages) {
      return res.status(400).json({ error: "Invalid page number" });
    }

    const jobs = await Job.find()
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)
      .exec();

    res.json({
      jobs,
      totalPages,
      currentPage: pageNumber,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
