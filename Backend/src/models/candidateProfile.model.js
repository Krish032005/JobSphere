const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true,
        unique : true,
    },
    phone : {
        type : String,
        default : ""
    },
    location : {
        type : String,
    },
    bio : {
        type : String ,
        maxlength : 300,
        default : ""
    },
    skills : [
        {
            type : String,
        }
    ],
    experience : [
        {
            company : String,
            role : String ,
            currentlyWorking : Boolean,
            startDate : Date,
            endDate : Date,
        }
    ],
    education : [
        {
            university : String,
            degree : String,
            passingYear : Number,
            grade : String
        }
    ],
    avatar: {
      public_id: String,
      url: String,
    },
    
    socialLinks: {
        github: String,
        linkedin: String,
        portfolio: String,
    },
    preferredJobType: {
      type: String,
      enum: ["Full Time", "Part Time", "Internship", "Contract"],
      default: "Full Time",
    },
},
{
    timestamps : true,
}
);

const candidateModel = mongoose.model("candidateProfile", candidateSchema);

module.exports= candidateModel ;
