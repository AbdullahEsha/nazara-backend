const express = require("express");
const routerCoupon = express.Router();

const couponController = require("../controller/couponController");

routerCoupon.get("/get/all", couponController.getCouponData);

module.exports = routerCoupon;
