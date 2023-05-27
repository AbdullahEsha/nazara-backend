const express = require("express");
const routerProduct = express.Router();

const productController = require("../controller/productController");

routerProduct.get("/get/all", productController.getProductData);
routerProduct.get("/get/:id", productController.getProductById);
routerProduct.post("/post/new", productController.createProduct);
routerProduct.patch("/update/:id", productController.updateProduct);
routerProduct.delete("/delete/:id", productController.deleteProduct);

module.exports = routerProduct;
