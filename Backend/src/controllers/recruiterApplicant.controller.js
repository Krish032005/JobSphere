// const applicationModel = require("../models/application.model");
// const jobModel = require("../models/job.model");

// async function applicantDetail(req,res){
//    try{
//     const userId = req.user.id;
//     const jobId = req.params.jobId;

//     const jobs = await jobModel.findById(jobId);
//     if(!jobs){
//         return res.status(404).json({
//                 message: "Job not found"
//         });
//     }

//      if (jobs.recruiter.toString() !== userId) {
//             return res.status(403).json({
//                 message: "You are not authorized to view these applicants"
//             });
//     }

//     const applications = await applicationModel
//             .find({ job: jobId })
//             .populate("candidate", "name email")
//             .populate("resume");
    
//     return res.status(200).json({
//             message: "Applicants fetched successfully",
//             count: applications.length,
//             applicants: applications
//         });
    
//    }
//    catch(err){
//     console.log(err);
//      return res.status(500).json({
//             message: "Internal server error"
//         });
//    }

// }
// module.exports= {applicantDetail};



const applicationModel = require("../models/application.model");
const jobModel = require("../models/job.model");
const recruiterProfile = require("../models/recruiterProfile.model");

async function applicantDetail(req, res) {
    try {
        const userId = req.user.id;
        const jobId = req.params.jobId;

        // Find job
        const job = await jobModel.findById(jobId);

        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        // Find recruiter profile of logged-in user
        const recruiter = await recruiterProfile.findOne({
            user: userId
        });

        if (!recruiter) {
            return res.status(404).json({
                message: "Recruiter profile not found"
            });
        }

        // Check whether this recruiter owns the job
        if (job.recruiter.toString() !== recruiter._id.toString()) {
            return res.status(403).json({
                message: "You are not authorized to view these applicants"
            });
        }

        // Get applicants
        const applications = await applicationModel
            .find({ job: jobId })
            .populate("candidate", "name email")
            .populate("resume");

        return res.status(200).json({
            message: "Applicants fetched successfully",
            count: applications.length,
            applicants: applications
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

module.exports = { applicantDetail };