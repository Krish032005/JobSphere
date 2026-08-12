const mongoose = require("mongoose");

const recruiterSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true,
        unique : true,
    },
    company_name : {
        type : String,
        
    },
    company_type : {
        type : String,
    },
    company_logo :{
        type : String ,
        default : null,
    },
    company_website : {
        type : String ,
        default : null
    },
    company_description : {
        type : String,
        default : "",
    },
    location : {
        type : String ,
        default : "",
    },
    phone : {
        type : String ,
        default : ""
    }
})

const recruiterModel = mongoose.model("recruiterProfile", recruiterSchema);

module.exports= recruiterModel ; 