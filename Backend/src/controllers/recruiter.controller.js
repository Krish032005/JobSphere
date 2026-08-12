const recruiterModel = require("../models/recruiterProfile.model");

async function recruiterProfile(req,res){
    try{
        const userId = req.user.id;
        console.log(userId);
        const recruiter = await recruiterModel.findOne({ user : userId}).populate("user", "name email");

        if(!recruiter){
            return res.status(401).json({ message : "User Not found"});
        }

        return res.status(200).json({
            success : true,
            recruiter
        })


    }catch(err){
        console.log(err);
        return res.status(500).json({ message : "Internal error"});
    }
}

async function updateRecruiter(req,res){
    try {
        const {
            companyName, companyType, companyWebsite, companyDescription, 
            location, phone 
         } = req.body;

         const userId = req.user.id;
         const recruiter = await recruiterModel.findOne({ user : userId});
         
         if(!recruiter){
            return res.status(401).json({ message : "User not Found"});
         }

         recruiter.company_name = companyName;
         recruiter.company_type = companyType;
         recruiter.company_website = companyWebsite;
         recruiter.company_description = companyDescription;
         recruiter.location = location;
         recruiter.phone = phone;

        await recruiter.save();

        return res.status(200).json({
            success: true,
            recruiter
        });


    }catch(err){
        console.log(err);
        return res.status(500).json({ message : "Internal Error"});
    }

}


module.exports= {recruiterProfile, updateRecruiter};