const express = require("express");
const routerOrder = express.Router();

const orderController = require("../controller/orderController");

routerOrder.get("/get/all", orderController.getOrderData);

module.exports = routerOrder;
