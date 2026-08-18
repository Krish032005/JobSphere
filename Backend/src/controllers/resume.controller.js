const candidateProfile = require("../models/candidateProfile.model");
const resumeModel = require("../models/resume.model");
const upload = require("../services/upload.service");

async function updateResume(req,res){
try{
   
    const userId = req.user.id;
    const candidate = await candidateProfile.findOne({ user : userId}).populate("user", "name email");

    if(!candidate){
        return res.status(401).json({
                message : "User Not found"
            })
    }
    if(!req.file){
        return res.status(400).json({ message : "Resume is required"});
    }

    const result = await upload(req.file.buffer);
    const resume = await resumeModel.create({
        candidate : candidate._id,
        resume_url : result.url,
        publicId : result.fileId,
        fileName : result.name,
         
    })

    return res.status(200).json({
        message : "Resume uploaded successfully",
        resume,
        candidate
    })
}catch(err){
    console.log(err);
    return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
}

}



module.exports= {updateResume};