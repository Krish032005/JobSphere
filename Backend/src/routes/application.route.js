const express = require("express");
const router = express.Router();

const applicationController = require("../controllers/application.controller");

const authMiddleware = require("../middleware/auth.middleware");

router.post("/:jobId",authMiddleware.authCandidate, applicationController.applyJob);
router.post("/:jobId", authMiddleware.authCandidate, applicationController.saveJob);
router.delete("/:jobId", authMiddleware.authCandidate, applicationController.unsaveJob);


module.exports = router;