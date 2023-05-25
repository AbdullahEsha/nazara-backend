const Cart = require("../models/Cart");

module.exports.getCartData = (req, res) => {
  Cart.find()
    .then((cart) => {
      res.status(200).json({ cart: cart });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};
