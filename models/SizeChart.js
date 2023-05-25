const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SizeChartSchema = new Schema(
  {
    sleeveLength: {
      type: mongoose.Types.Decimal128,
    },
    chest: {
      type: mongoose.Types.Decimal128,
    },
    waist: {
      type: mongoose.Types.Decimal128,
    },
    hip: {
      type: mongoose.Types.Decimal128,
    },
    pantLength: {
      type: mongoose.Types.Decimal128,
    },
  },
  { timestamps: true }
);

const SizeChart = mongoose.model("SizeChart", SizeChartSchema);
module.exports = SizeChart;
