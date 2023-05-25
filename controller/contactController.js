const Contact = require("../models/Contact");

module.exports.getContactData = async (req, res) => {
  await Contact.find({})
    .then((contact) => {
      res
        .status(200)
        .json({ status: "success", total: contact.length, data: contact });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};
