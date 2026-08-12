const upload = require("../services/upload.service");
const recruiterProfile = require("../models/recruiterProfile.model");


async function companyLogo(req,res){
    try{
        const userId = req.user.id;
        const recruiter = await recruiterProfile.findOne({user : userId});

        if(!recruiter){
            return res.status(401).json({ message : "User not Found"});
        }

        const result = await upload(req.file.buffer);
        recruiter.company_logo = result.url;

        await recruiter.save();

        return res.status(200).json({ 
            success : true,
            recruiter
        })

    }catch(err){
        console.log(err);
    }
}

module.exports= {companyLogo};