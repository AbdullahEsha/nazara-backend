const express = require("express");
const routerPromotion = express.Router();

const promotionController = require("../controller/promotionController");

routerPromotion.get("/get/all", promotionController.getPromotionData);
routerPromotion.get("/get/:id", promotionController.getPromotionById);
routerPromotion.post("/post/new", promotionController.createPromotion);
routerPromotion.patch("/update/:id", promotionController.updatePromotion);
routerPromotion.delete("/delete/:id", promotionController.deletePromotion);

module.exports = routerPromotion;
