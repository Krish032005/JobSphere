const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({

    recruiter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "recruiterProfile",
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    skills: [String],

    location: String,

    jobType: {
        type: String,
        enum: ["Full Time", "Part Time", "Internship", "Contract"]
    },

    experienceMin: Number,
    experienceMax: Number,

    salaryMin: Number,
    salaryMax: Number,

    openings: Number,

    deadline: Date,

    status: {
        type: String,
        enum: ["active", "closed"],
        default: "active"
    }

}, { timestamps: true });

const jobModel = mongoose.model("jobpost", jobSchema);

module.exports= jobModel;