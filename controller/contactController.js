const Contact = require("../models/Contact");

module.exports.getContactData = (req, res) => {
  Contact.find()
    .then((contact) => {
      res.status(200).json({ contact: contact });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};
