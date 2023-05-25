const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    sku: {
      type: String,
      trim: true,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
    },
    quantity: {
      type: String,
      required: true,
    },
    color: [{ type: String }],
    size: [{ type: String }],
    slug: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    imageUrl: [{ type: String }],
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
