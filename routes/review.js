const express = require("express");
const routerReview = express.Router();

const reviewController = require("../controller/reviewController");

routerReview.get("/get/all", reviewController.getReviewData);

module.exports = routerReview;
