const express = require("express");
const router = express.Router();

const applicationController = require("../controllers/application.controller");

const recruiterApplicant = require("../controllers/recruiterApplicant.controller");

const authMiddleware = require("../middleware/auth.middleware");

router.post("/:jobId",authMiddleware.authCandidate, applicationController.applyJob);
router.post("/saved/:jobId", authMiddleware.authCandidate, applicationController.saveJob);
router.delete("/unsaved/:jobId", authMiddleware.authCandidate, applicationController.unsaveJob);
router.get("/applied", authMiddleware.authCandidate, applicationController.appliedJob);

router.get("/applicants/:jobId", authMiddleware.authRecruiter, recruiterApplicant.applicantDetail);

module.exports = router;