const User = require("../models/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const bcrypt = require("bcryptjs");

module.exports.getUserData = (req, res) => {
  User.find()
    .then((user) => {
      res.status(200).json({ user: user });
    })
    .catch((err) => {
      res.status(422).json({ error: err });
    });
};

module.exports.createUser = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.userType = "user";
    const user = await User.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};
