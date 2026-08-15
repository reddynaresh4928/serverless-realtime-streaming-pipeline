import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    reportName: {
      type: String,
      required: true,
    },

    reportUrl: {
      type: String,
      required: true,
    },

    reportType: {
      type: String,
      enum: ["pdf", "csv"],
      default: "pdf",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Report",
  reportSchema
);