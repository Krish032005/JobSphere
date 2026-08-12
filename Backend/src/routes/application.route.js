const express = require("express");
const router = express.Router();

const { applyJob } = require("../controllers/application.controller");

const authMiddleware = require("../middleware/auth.middleware");

router.post("/:jobId",authMiddleware.authCandidate,applyJob);

module.exports = router;