const express = require("express");
const routerCategory = express.Router();

const categoryController = require("../controller/categoryController");

routerCategory.get("/get/all", categoryController.getCategoryData);
routerCategory.get("/get/:id", categoryController.getCategoryById);
routerCategory.post("/post/new", categoryController.createCategory);
routerCategory.patch("/update/:id", categoryController.updateCategory);
routerCategory.delete("/delete/:id", categoryController.deleteCategory);

module.exports = routerCategory;
