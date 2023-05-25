const express = require("express");
const routerCategory = express.Router();

const categoryController = require("../controller/categoryController");

routerCategory.get("/get/all", categoryController.getCategoryData);

module.exports = routerCategory;
