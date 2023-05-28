const express = require("express");
const routerOrder = express.Router();

const orderController = require("../controller/orderController");

routerOrder.get("/get/all", orderController.getOrderData);
routerOrder.get("/get/:id", orderController.getOrderById);
routerOrder.post("/post/new", orderController.createOrder);
routerOrder.patch("/update/:id", orderController.updateOrder);
routerOrder.delete("/delete/:id", orderController.deleteOrder);

module.exports = routerOrder;
