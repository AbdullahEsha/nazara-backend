const express = require("express");
const routerCart = express.Router();

const cartController = require("../controller/cartController");

routerCart.get("/get/all", cartController.getCartData);

module.exports = routerCart;
