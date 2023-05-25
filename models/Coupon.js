const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CouponSchema = new Schema(
  {
    // Coupon code
    code: {
      type: String,
      trim: true,
      required: true,
    },
    // discount in percentage
    discount: {
      type: mongoose.Types.Decimal128,
      trim: true,
      required: true,
    },
    // coupon availability controle
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Coupon = mongoose.model("Coupon", CouponSchema);
module.exports = Coupon;
