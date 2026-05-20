const express = require("express");
const router = express.Router();
const analyticsController = require("../controllers/analyticsController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", analyticsController.getAnalytics);
router.post("/", authMiddleware, analyticsController.createAnalytics);
router.put("/:id", authMiddleware, analyticsController.updateAnalytics);
router.delete("/:id", authMiddleware, analyticsController.deleteAnalytics);

module.exports = router;
