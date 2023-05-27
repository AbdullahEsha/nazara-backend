const Contact = require("../models/Contact");

module.exports.getContactData = async (req, res) => {
  try {
    const contact = await Contact.find({});
    res.status(200).json({ status: "success", data: contact });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return `Contact Id: ${req.params._id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: contact,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createContact = async (req, res) => {
  try {
    const Contact = await Contact.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        Contact,
      },
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.body._id, req.body);
    if (!contact) {
      return `Contact Id: ${req.params._id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: contact,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.body._id);
    if (!contact) {
      return `Contact Id: ${req.params._id} not found!`;
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
