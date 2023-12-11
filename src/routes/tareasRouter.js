const express = require("express");
const router = express.Router();

const controller = require("../controller/tareasController");

router.get("/", controller.index);
router.post("/", controller.store);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;
