const applicationModel = require("../models/application.model");
const jobModel = require("../models/job.model");
const candidateProfile = require("../models/candidateProfile.model");
const resumeModel = require("../models/resume.model");

async function applyJob(req, res) {
    try {

        // Get logged-in user's ID from JWT
        const userId = req.user.id;

        // Get job ID from URL
        const jobId = req.params.jobId;

        // Get resume and cover letter from request body
        const { resumeId, coverLetter } = req.body;


        // 1. Find candidate profile
        const candidate = await candidateProfile.findOne({
            user: userId
        });

        if (!candidate) {
            return res.status(404).json({
                message: "Candidate profile not found"
            });
        }


        // 2. Check whether job exists
        const Job = await jobModel.findById(jobId);

        if (!Job) {
            return res.status(404).json({
                message: "Job not found"
            });
        }


        // 3. Check whether job is active
        if (Job.status !== "active") {
            return res.status(400).json({
                message: "This job is no longer active"
            });
        }


        const resume = await resumeModel.findOne({
            _id: resumeId,
            candidate: candidate._id
        });

        if (!resume) {
            return res.status(404).json({
                message: "Resume not found"
            });
        }


        // 5. Check if candidate already applied
        const existingApplication = await applicationModel.findOne({
            candidate: candidate._id,
            job: jobId
        });

        if (existingApplication) {
            return res.status(409).json({
                message: "You have already applied for this job"
            });
        }


        // 6. Create application
        const application = await applicationModel.create({
            candidate: candidate._id,
            job: jobId,
            resume: resume._id,
            coverLetter
        });


        // 7. Send response
        return res.status(201).json({
            success: true,
            message: "Application submitted successfully",
            application
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            message: "Internal error"
        });
    }
}

async function saveJob(req,res){
    
}

module.exports = { applyJob };