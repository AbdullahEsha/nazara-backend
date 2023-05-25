const SizeChart = require("../models/SizeChart");

module.exports.getSizeChartData = (req, res) => {
  SizeChart.find()
    .then((sizeChart) => {
      res.status(200).json({ sizeChart: sizeChart });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};
