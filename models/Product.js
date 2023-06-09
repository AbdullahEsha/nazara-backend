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
    //variant is dynamic and quantity is depending on color
    variant: [
      {
        color: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    size: [{ type: String }],
    slug: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
    },
    promotion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Promotion",
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
