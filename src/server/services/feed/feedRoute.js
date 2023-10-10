const express = require("express");
const router = express.Router();

const FeedController = require("./feedController");

const feedController = new FeedController();

router.post("/getAllFeeds", feedController.gellAllFeeds);

module.exports = router;