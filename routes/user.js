const express = require("express");
const routerUser = express.Router();

const userController = require("../controller/userController");

routerUser.get("/get/all", userController.getUserData);
routerUser.post("/post/new", userController.createUser);

module.exports = routerUser;
