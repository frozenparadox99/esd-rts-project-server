const express = require("express");
const dataController = require("../controllers/dataController");

const router = express.Router();

router.get("/", dataController.getOverview);
router.post("/", dataController.updateOverview);

module.exports = router;
