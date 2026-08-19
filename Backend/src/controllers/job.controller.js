const jobModel = require("../models/job.model");
const recruiterProfile= require("../models/recruiterProfile.model");


async function jobPost(req,res){
    try{
        const {
            title, description, skills, location, jobType,experienceMin,experienceMax,
            salaryMin,salaryMax,openings,deadline,status
        } = req.body;
        const userId = req.user.id;
        const recruiter = await recruiterProfile.findOne({user : userId});
    
        if(!recruiter){
            return res.status(401).json({ message : "User Not found"});
        }

        const JobPost = await jobModel.create({
            title,
            description,
            skills,
            location,
            jobType,
            experienceMin,
            experienceMax,
            salaryMin,
            salaryMax,
            openings,
            deadline,
            recruiter :recruiter.id,
            status : "active"
        });

        return res.status(200).json({
            message : "JobPost created",
            JobPost
        })

    }catch(err){
        console.log(err);
        return res.status(500).json({ message : "Internal error"});
    }
}


async function getJobs(req, res) {
    try {

        const jobs = await jobModel
            .find({ status: "active" })
            .populate(
                "recruiter",
                "company_name company_logo company_website company_description company_type location"
            )
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: jobs.length,
            jobs
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: "Internal error"
        });
    }
}

async function getJobsCreated(req,res){
   try{

    const userId = req.user.id;

    const recruiter = await recruiterProfile.findOne({user : userId});
    if(!recruiter){
        return res.status(404).json({
                message: "Recruiter profile not found"
        });
    }

    const jobs = await jobModel
    .find({ recruiter : recruiter._id})
    .sort({ createdAt : -1});

    return res.status(200).json({
        success: true,
        count: jobs.length,
        jobs
    });


   }catch(err){

    console.log(err);
    return res.status(500).json({
        message: "Internal error"
    });
   }
}


module.exports= {jobPost, getJobs, getJobsCreated};