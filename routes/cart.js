const express = require("express");
const routerCart = express.Router();

const cartController = require("../controller/cartController");

routerCart.get("/get/all", cartController.getCartData);
routerCart.get("/get/:id", cartController.getCartById);
routerCart.post("/post/new", cartController.createCart);
routerCart.patch("/update/:id", cartController.updateCart);
routerCart.delete("/delete/:id", cartController.deleteCart);

module.exports = routerCart;
