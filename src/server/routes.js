const express = require("express");
const router = express.Router();

const routes = [require("./services/feed/feedRoute")];

router.use("/", routes);
module.exports = router;
