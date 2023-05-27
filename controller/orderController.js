const Order = require("../models/Order");

module.exports.getOrderData = async (req, res) => {
  try {
    const order = await Order.find({});
    res
      .status(200)
      .json({ status: "success", total: order.length, data: order });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return `Order Id: ${req.params._id} not found`;
    }
    res.status(200).json({
      status: "success",
      data: order,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({
      status: "success",
      data: order,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.body._id, req.body);

    if (!order) {
      return `Order Id: ${req.params._id} not found`;
    }
    res.status(200).json({
      status: "success",
      data: order,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.body._id);
    if (!order) {
      return `Order Id: ${req.params._id} not found`;
    }
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};
