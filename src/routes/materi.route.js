const express = require("express");

const router = express.Router();

const { validateToken } = require("../middlewares/auth");
const { index } = require("../controllers/materi.controllers");

router.get("/", validateToken, index);

module.exports = router;
