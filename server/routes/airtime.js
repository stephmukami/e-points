const express = require("express")
const router = express.Router();

const airtime = require("../controller/airtime-controller");

router.post("/",airtime);

module.exports = router;