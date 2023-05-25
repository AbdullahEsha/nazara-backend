const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    // count of products
    quantity: {
      type: Number,
      trim: true,
      required: true,
    },
    // coupon/voucher _id, if was available
    discount: {
      type: String,
      trim: true,
    },
    paymentType: {
      type: String,
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    sizeChart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SizeChart",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
