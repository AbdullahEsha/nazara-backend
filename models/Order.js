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
    paymentMethod: {
      type: String,
      required: true,
    },
    shippingAddress: {
      type: String,
      required: true,
    },
    remark: {
      type: String,
      trim: true,
    },
    // coupon code, if was available
    discountCode: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coupon",
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
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
