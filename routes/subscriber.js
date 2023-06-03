const express = require("express");
const routersubscriber = express.Router();

const subscriberController = require("../controller/subscriberController");

routersubscriber.get("/get/all", subscriberController.getSubscriberData);
routersubscriber.get("/get/:id", subscriberController.getSubscriberById);
routersubscriber.post("/post/new", subscriberController.createSubscriber);
routersubscriber.patch("/update/:id", subscriberController.updateSubscriber);
routersubscriber.delete("/delete/:id", subscriberController.deleteSubscriber);

module.exports = routersubscriber;
