const express = require("express");
const routerSizeChart = express.Router();

const sizeChartController = require("../controller/sizeChartController");

routerSizeChart.get("/get/all", sizeChartController.getSizeChartData);

module.exports = routerSizeChart;
