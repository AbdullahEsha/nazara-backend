const Product = require("../models/Product");
const Slugify = require("slugify");

const makeSKU = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports.getProductData = async (req, res) => {
  try {
    const product = await Product.find({});
    res
      .status(200)
      .json({ status: "success", total: product.length, data: product });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createProduct = async (req, res) => {
  const slug = Slugify(req.body.name, {
    lower: true,
    strict: true,
    replacement: "-",
  });

  const sku = makeSKU(5);

  try {
    req.body.slug = slug;
    req.body.sku = sku;

    const newProduct = new Product(req.body);
    const product = await newProduct.save();

    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params._id);
    if (!product) {
      return `Product Id: ${req.params._id} not found`;
    }
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.updateProduct = async (req, res) => {
  const slug = Slugify(req.body.name, {
    lower: true,
    strict: true,
    replacement: "-",
  });

  req.body.slug = slug;

  try {
    const product = await Product.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return `Product Id: ${req.params._id} not found`;
    }
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};
module.exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.body.id);

    if (!product) {
      return `Product Id: ${req.body.id} not found`;
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
