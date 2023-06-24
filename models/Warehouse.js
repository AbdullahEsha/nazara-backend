const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WarehoueSchema = new Schema(
  {
    //Warehouse name
    name: {
      type: String,
      trim: true,
      required: true,
    },
    //Warehouse is draft or not
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Warehouse = mongoose.model("Warehouse", WarehoueSchema);
module.exports = Warehouse;