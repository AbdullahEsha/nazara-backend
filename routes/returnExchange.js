const express = require("express");
const routerReturnExchange = express.Router();

const returnExchangeController = require("../controller/returnExchangeController");

routerReturnExchange.get(
  "/get/all",
  returnExchangeController.getReturnExchangeData
);

module.exports = routerReturnExchange;
