const Review = require("../models/Review");

module.exports.getReviewData = (req, res) => {
  Review.find()
    .then((review) => {
      res.status(200).json({ review: review });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};
