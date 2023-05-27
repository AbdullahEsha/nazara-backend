const express = require("express");
const routerOrder = express.Router();

const orderController = require("../controller/orderController");

routerOrder.get("/get/all", orderController.getOrderData);
routerOrder.get("/get/:id", contactController);
routerOrder.post("/post/new", contactController.createCategory);
routerOrder.patch("/update/:id", contactController.updateCategory);
routerOrder.delete("/delete/:id", contactController.deleteCategory);

module.exports = routerOrder;
