const express = require("express");
const router = express.Router();


const authMiddleware = require("../middleware/auth.middleware");
const upload = require("../middleware/upload.middleware");

const candidateController = require("../controllers/candidateProfile.controller");
const avatarController = require("../controllers/avatar.controller");
const resumeController = require("../controllers/resume.controller");

router.get("/profile",authMiddleware.authCandidate, candidateController.profile);
router.post("/update-profile",authMiddleware.authCandidate, candidateController.updateProfile);
router.patch("/update-avatar", authMiddleware.authCandidate,upload.single("avatar"), avatarController.updateAvatar);
router.post("/update-resume", authMiddleware.authCandidate, upload.single("resume"),resumeController.updateResume);



module.exports= router;