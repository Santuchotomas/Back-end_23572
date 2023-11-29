const express = require("express");
const router = express.Router();

const controller = require("../controller/tareasController");

router.get("/", controller.index);

module.exports = router;
