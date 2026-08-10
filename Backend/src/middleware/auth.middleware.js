const jwt = require("jsonwebtoken");

async function authCandidate(req,res,next){
    try{
        const token = req.cookies.token;

        if(!token){
            return res.status(403).json({ message : "Unauthorized"});
        }

        const decoded = jwt.verify(token , process.env.JWT_SECRET);

        if(decoded.role !== "candidate"){
             return res.status(403).json({ message : "Unauthorized"});
        }

        req.user = decoded;
        next();

    }catch(err){
        console.log(err);
        res.status(500).json({ message : "Internal Error"});
    }
}

async function authRecruiter(req,res,next){
    try{
        const token = req.cookies.token;

        if(!token){
            return res.status(403).json({ message : "Unauthorized"});
        }

        const decoded = jwt.verify(token , process.env.JWT_SECRET);

        if(decoded.role !== "recruiter"){
             return res.status(403).json({ message : "Unauthorized"});
        }

        req.user = decoded;
        next();

    }catch(err){
        console.log(err);
        res.status(500).json({ message : "Internal Error"});
    }
}

module.exports= {authCandidate, authRecruiter};