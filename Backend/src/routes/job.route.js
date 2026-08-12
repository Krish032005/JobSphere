const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const jobController = require("../controllers/job.controller");


router.post("/job-post",authMiddleware.authRecruiter, jobController.jobPost);

module.exports= router;