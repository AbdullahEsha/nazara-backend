const Cart = require("../models/Cart");

module.exports.getCartData = async (req, res) => {
  try {
    const cart = await Cart.find({});
    res.status(200).json({ status: "success", total: cart.length, data: cart });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) {
      return `Cart Id: ${req.params._id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: cart,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createCart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        cart,
      },
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.updateCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.body._id);

    if (!cart) {
      return `Cart Id: ${req.params._id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: cart,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.body._id);
    if (!cart) {
      return `Cart Id: ${req.params._id} not found!`;
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
