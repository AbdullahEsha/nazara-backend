const Coupon = require("../models/Coupon");

module.exports.getCouponData = (req, res) => {
  Coupon.find()
    .then((coupon) => {
      res.status(200).json({ coupon: coupon });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};
