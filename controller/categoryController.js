const Category = require("../models/Category");

module.exports.getCategoryData = (req, res) => {
  Category.find()
    .then((category) => {
      res.status(200).json({ category: category });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};
