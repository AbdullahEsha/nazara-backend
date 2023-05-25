const ReturnExchange = require("../models/ReturnExchange");

module.exports.getReturnExchangeData = (req, res) => {
  ReturnExchange.find()
    .then((returnExchange) => {
      res.status(200).json({ returnExchange: returnExchange });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};
