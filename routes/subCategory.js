const express = require("express");
const routerSubCategory = express.Router();

const subCategoryController = require("../controller/subCategoryController");

routerSubCategory.get("/get/all", subCategoryController.getSubCategoryData);
routerSubCategory.get("/get/:id", subCategoryController.getSubCategoryById);
routerSubCategory.post("/post/new", subCategoryController.createSubCategory);
routerSubCategory.patch("/update/:id", subCategoryController.updateSubCategory);
routerSubCategory.delete(
  "/delete/:id",
  subCategoryController.deleteSubCategory
);

module.exports = routerSubCategory;
