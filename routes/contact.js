const express = require("express");
const routerContact = express.Router();

const contactController = require("../controller/contactController");

routerContact.get("/get/all", contactController.getContactData);
routerContact.get("/get/:id", contactController.getContactById);
routerContact.post("/post/new", contactController.createContact);
routerContact.patch("/update/:id", contactController.updateContact);
routerContact.delete("/delete/:id", contactController.deleteContact);

module.exports = routerContact;
