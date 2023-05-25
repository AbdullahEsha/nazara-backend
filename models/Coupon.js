const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CouponSchema = new Schema(
  {
    // Coupon code
    code: {
      type: String,
    },
    // discount in percentage
    discount: {
      type: mongoose.Types.Decimal128,
    },
    // coupon availability controle
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

const Coupon = mongoose.model("Coupon", CouponSchema);
module.exports = Coupon;
