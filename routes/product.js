const express = require("express");
const routerProduct = express.Router();

const productController = require("../controller/productController");

routerProduct.get("/get/all", productController.getProductData);

module.exports = routerProduct;
