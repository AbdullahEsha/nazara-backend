const Coupon = require("../models/Coupon");

module.exports.getCouponData = async (req, res) => {
  try {
    const coupon = await Coupon.find({});
    res
      .status(200)
      .json({ status: "success", total: coupon.length, data: coupon });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getCouponById = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    if (!coupon) {
      return `Coupon Id: ${req.params.id} not found`;
    }
    res.status(200).json({
      status: "success",
      data: coupon,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.create(req.body);
    res.status(201).json({
      status: "success",
      data: coupon,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.updateCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate the data before updating
    });

    if (!coupon) {
      return `Coupon Id: ${req.params.id} not found`;
    }
    res.status(200).json({
      status: "success",
      data: coupon,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.deleteCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndDelete(req.params.id);
    if (!coupon) {
      return `Coupon Id: ${req.params.id} not found`;
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
