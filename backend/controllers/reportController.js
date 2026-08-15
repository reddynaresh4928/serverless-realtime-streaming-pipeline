import Report from "../models/Report.js";

export const saveReport = async (req, res) => {
  try {

    const report = await Report.create({
      userId: req.user.id,
      email: req.user.email,
      reportName: req.body.reportName,
      reportUrl: req.body.reportUrl,
      reportType: req.body.reportType || "pdf",
    });

    res.status(201).json({
      message: "Report saved successfully",
      report,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to save report",
    });

  }
};

export const getMyReports = async (req, res) => {

  try {

    const reports = await Report.find({
      userId: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.json(reports);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to fetch reports",
    });

  }

};

export const deleteReport = async (req, res) => {

  try {

    const report = await Report.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!report) {
      return res.status(404).json({
        message: "Report not found",
      });
    }

    await Report.findByIdAndDelete(req.params.id);

    res.json({
      message: "Report deleted successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to delete report",
    });

  }

};