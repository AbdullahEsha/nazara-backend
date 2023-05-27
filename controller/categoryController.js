const Category = require("../models/Category");

module.exports.getCategoryData = async (req, res) => {
  try {
    const category = await Category.find({});
    res.status(200).json({ status: "success", data: category });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return `Category Id: ${req.params._id} not found!`;
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

module.exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        category,
      },
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.body._id);

    if (!category) {
      return `Category Id: ${req.params._id} not found!`;
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

module.exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.body._id);
    if (!category) {
      return `Category Id: ${req.params._id} not found!`;
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
