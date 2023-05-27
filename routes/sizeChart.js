const express = require("express");
const routerSizeChart = express.Router();

const sizeChartController = require("../controller/sizeChartController");

routerSizeChart.get("/get/all", sizeChartController.getSizeChartData);
routerSizeChart.get("/get/:id", sizeChartController.getSizeChartById);
routerSizeChart.post("/post/new", sizeChartController.createSizeChart);
routerSizeChart.patch("/update/:id", sizeChartController.updateSizeChart);
routerSizeChart.delete("/delete/:id", sizeChartController.deleteSizeChart);

module.exports = routerSizeChart;
