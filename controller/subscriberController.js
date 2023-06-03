const Subscriber = require("../models/Subscriber");

module.exports.getSubscriberData = async (req, res) => {
  try {
    const subscriber = await Subscriber.find({});
    res.status(200).json({ status: "success", data: subscriber });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getSubscriberById = async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    if (!subscriber) {
      return `Subscriber Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: subscriber,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.create(req.body);
    res.status(200).json({
      status: "success",
      data: subscriber,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.updateSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.findByIdAndUpdate(req.body.id);

    if (!subscriber) {
      return `Subscriber Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: subscriber,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.deleteSubscriber = async (req, res) => {
  try {
    const subscriber = await Subscriber.findByIdAndDelete(req.body.id);
    if (!subscriber) {
      return `Subscriber Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};
