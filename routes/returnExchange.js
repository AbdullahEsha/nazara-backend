const express = require("express");
const routerReturnExchange = express.Router();

const returnExchangeController = require("../controller/returnExchangeController");

routerReturnExchange.get(
  "/get/all",
  returnExchangeController.getReturnExchangeData
);
routerReturnExchange.get(
  "/get/:id",
  returnExchangeController.getReturnExchangeById
);
routerReturnExchange.post(
  "/post/new",
  returnExchangeController.createReturnExchange
);
routerReturnExchange.patch(
  "/update/:id",
  returnExchangeController.updateReturnExchange
);
routerReturnExchange.delete(
  "/delete/:id",
  returnExchangeController.deleteReturnExchange
);

module.exports = routerReturnExchange;
