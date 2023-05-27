const express = require("express");
const routerReview = express.Router();

const reviewController = require("../controller/reviewController");

routerReview.get("/get/all", reviewController.getReviewData);
routerReview.get("/get/:id", reviewController.getReviewById);
routerReview.post("/post/new", reviewController.createReview);
routerReview.patch("/update/:id", reviewController.updateReview);
routerReview.delete("/delete/:id", reviewController.deleteReview);

module.exports = routerReview;
