const express = require("express");
const routerContact = express.Router();

const contactController = require("../controller/contactController");

routerContact.get("/get/all", contactController.getContactData);

module.exports = routerContact;
