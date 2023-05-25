const Product = require("../models/Product");

module.exports.getProductData = (req, res) => {
  Product.find()
    .then((product) => {
      res.status(200).json({ product: product });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};
