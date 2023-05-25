const express = require("express");
const routerProduct = express.Router();

const productController = require("../controller/productController");

routerProduct.get("/get/all", productController.getProductData);
routerProduct.get("/get/:id", productController.getProductById);
routerProduct.post("/get/new", productController.createProduct);
routerProduct.patch("/get/:id", productController.updateProduct);
routerProduct.delete("/get/delete", productController.deleteProduct);

module.exports = routerProduct;
