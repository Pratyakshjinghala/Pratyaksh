const express = require("express");
const { sendMessage } = require("../controller/contactController");

const router = express.Router();

router.post("/", sendMessage);

module.exports = router;
