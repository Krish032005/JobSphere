const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    candidate : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "candidateProfile",
        required : true
    },
    job :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "jobpost",
        reqiured : true
    },
    resume: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "resume",
        required: true
    },

    coverLetter: {
        type: String,
        default: ""
    },

    status: {
        type: String,
        enum: [
            "applied",
            "reviewing",
            "shortlisted",
            "interview",
            "rejected",
            "hired"
        ],
        default: "applied"
    }

}, { timestamps: true });

applicationSchema.index(
    { candidate: 1, job: 1 },
    { unique: true }
);

const applicationModel = mongoose.model("application", applicationSchema);

module.exports = applicationModel;
