const User = require("../models/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const bcrypt = require("bcryptjs");

module.exports.getUserData = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({ status: "success", total: user.length, data: user });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createUser = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.userType = "user";
    await User.create(req.body);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    if (err.keyPattern.email < 1) {
      res.status(422).json({
        status: "failed 🔴",
        message: err,
      });
    } else {
      res.status(422).json({
        status: "Already registered with this email 🔴",
        message: err,
      });
    }
  }
};
