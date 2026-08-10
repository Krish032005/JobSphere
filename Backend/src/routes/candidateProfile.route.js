const express = require("express");
const router = express.Router();
const candidateController = require("../controllers/candidateProfile.controller");
const authMiddleware = require("../middleware/auth.middleware");


router.get("/profile",authMiddleware.authCandidate, candidateController.profile);
router.post("/update-profile",authMiddleware.authCandidate, candidateController.updateProfile);



module.exports= router;