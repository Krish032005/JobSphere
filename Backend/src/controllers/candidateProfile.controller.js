const candidateProfile = require("../models/candidateProfile");



async function profile(req,res){
    try{
       
        const userId = req.user.id;
        const candidate = await candidateProfile.findOne({user : userId}).populate("user", "name email");
        

        if(!candidate){
            return res.status(401).json({
                message : "User Not found"
            })
        }

        return res.status(200).json({
            success: true,
            candidate
        });



    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

async function updateProfile(req,res){
    try{
        const { phone, location, bio, skills, experience, education} = req.body;

        const userId = req.user.id;

        const candidate = await candidateProfile.findOne({ user: userId});
        
        if(!candidate){
            return res.status(401).json({ message: "Unauthorized"});
        }

        candidate.phone = phone;
        candidate.location = location;
        candidate.bio = bio;
        candidate.skills = skills;
        candidate.education = education;
        candidate.experience = experience;
        
        await candidate.save();

        return res.status(200).json({
            success: true,
            candidate
        });

    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}


module.exports= {profile, updateProfile};