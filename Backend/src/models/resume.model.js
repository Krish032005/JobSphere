const mongoose = require("mongoose");

const resumeSchema = mongoose.Schema({
    candidate : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "candidateProfile",
    },
    resume_url : {
        type : String,
        required : true
    },
    publicId : {
        type : String,
    },
    fileName : {
        type : String,
    }
})

const resumeModel = mongoose.model("resume", resumeSchema);

module.exports= resumeModel;