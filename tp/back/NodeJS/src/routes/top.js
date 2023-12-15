const express = require("express");
const router = express.Router();
const { search } = require("../controllers/top");


router.get("/afficheTop", search);

module.exports = router;
