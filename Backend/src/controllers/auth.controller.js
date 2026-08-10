const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");
const candidateProfile = require("../models/candidateProfile");


async function registerUser(req,res){
    const { name, email, password, role="candidate"} = req.body;


    if (!name || !email || !password) {
    return res.status(400).json({
        message: "All fields are required"
    });
    }

   const isUserAlreadyExists = await userModel.findOne({email});

   if(isUserAlreadyExists){
    return res.status(409).json({ message : "User Already Exists !!"});
   }
  

   const hash =  await bcrypt.hash(password,10);

    const user = await userModel.create({
    name,
    email : email.toLowerCase(),
    password : hash,
    role,
   })

   if(user.role === "candidate"){
       await candidateProfile.create({
        user : user._id,
       })
   }

   const token = jwt.sign({
    id : user._id,
    role : user.role,
   }, process.env.JWT_SECRET);

   res.cookie("token",token);

   res.status(200).json({
    message : "User created successfully !!",
    user,
   })
}


async function loginUser(req,res){
    try{

        const { email, password} = req.body;
    
        const User = await userModel.findOne({email : email.toLowerCase()});
    
        if(!User){
            return res.status(401).json({ message : "Unauthorized !!"});
        }
        
        const isPasswordCorrect = await bcrypt.compare(password, User.password);
        if(!isPasswordCorrect){
            return res.status(409).json({message : "Invalid Credentials"})
        }

        const token = jwt.sign({
            id : User._id,
            role : User.role
        }, process.env.JWT_SECRET);

        res.cookie("token", token)
        
        res.status(200).json({
            message : "Login Successfully !!",
            User
        })
    }catch(err){
        console.log(err);
        res.status(409).json({
            message : "Invalid Credentials"
        })
    }
}



module.exports= {registerUser, loginUser};