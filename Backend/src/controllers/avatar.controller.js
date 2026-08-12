const candidateProfile = require("../models/candidateProfile.model");
const uploadAvatar = require("../services/upload.service");


async function updateAvatar(req,res){
    try{

        const userId = req.user.id;
        const candidate = await candidateProfile.findOne({user : userId});
        
        if(!candidate){
            return res.status(404).json({ message : "Profile not Found !!"});
        }
        if(!req.file){
            return res.status(400).json({ message : "Avatar is required"});
        }
    
        const result = await uploadAvatar(req.file.buffer);
        candidate.avatar = {
            public_id : result.fileId,
            url : result.url,
        };
    
        await candidate.save();
    
        return res.status(200).json({ 
            message : "Uploaded successfully",
            avatar : candidate.avatar,
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }

}

module.exports= {updateAvatar};