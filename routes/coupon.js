const express = require("express");
const router = express.Router();

const couponController = require("../controller/couponController");

router.get("/", couponController.getCouponData);

module.exports = router;
