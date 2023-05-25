const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    message: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;
