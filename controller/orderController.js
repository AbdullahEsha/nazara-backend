const Order = require("../models/Order");

module.exports.getOrderData = (req, res) => {
  Order.find()
    .then((order) => {
      res.status(200).json({ order: order });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};
