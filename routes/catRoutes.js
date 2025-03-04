const express = require("express");
const router = express.Router();
const catController = require("../controllers/catController");

router.get("/", catController.getCats);

module.exports = router;
