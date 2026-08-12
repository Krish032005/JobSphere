const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware"); 
const upload = require("../middleware/upload.middleware");

const recruiterController = require("../controllers/recruiter.controller"); 
const logoController = require("../controllers/logo.controller");

router.get("/recruiter-profile",authMiddleware.authRecruiter, recruiterController.recruiterProfile);
router.patch("/recruiter-update", authMiddleware.authRecruiter,recruiterController.updateRecruiter);
router.patch("/recruiter-logo",authMiddleware.authRecruiter, upload.single("logo"), logoController.companyLogo);


module.exports= router;
