const mongoose = require("mongoose");

const savedJobSchema = new mongoose.Schema(
  {
    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "candidateProfile",
      required: true,
    },

    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "job",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

savedJobSchema.index({ candidate: 1, job: 1 }, { unique: true });

module.exports = mongoose.model("savedJob", savedJobSchema);