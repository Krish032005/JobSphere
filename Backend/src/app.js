const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
const cookieParser = require("cookie-parser");

const authRouter = require("../src/routes/auth.route");
const candidateRouter = require("../src/routes/candidateProfile.route");
const recruiterRouter = require("../src/routes/recruiterProfile.route");
const jobRouter = require("../src/routes/job.route");

const upload = multer({
    storage: multer.memoryStorage(), // this is use to store the file tempo till the file is store into somewhere
})
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth/", authRouter);
app.use("/api/candidate/", candidateRouter);
app.use("/api/recruiter/", recruiterRouter);
app.use("/api/posting/", jobRouter);


module.exports= app;