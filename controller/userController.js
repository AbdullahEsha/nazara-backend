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

module.exports.loginUser = async (req, res) => {
  const { email, password, loginTypes } = req.body;
  if (!email) {
    return "Please provide email!";
  }
  const user = await User.findOne({ email }).select("password");
  if (!user) {
    return "User Not Found!";
  }
  try {
    if (loginTypes === "social") {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

      res.status(200).json({
        status: "success",
        token,
      });
    } else {
      if (!password) {
        return "Please provide email and password!";
      }
      const validPass = await bcrypt.compare(password, user.password);
      if (!validPass) {
        return "Invalid Password!";
      }
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

      // res.cookie('jwt', token, {
      //   expires: new Date(
      //     Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      //   ),
      //   httpOnly: true,
      //   // secure: process.env.NODE_ENV === 'production',
      //   secure: false,
      // });
      // console.log(process.env.NODE_ENV);

      res.status(200).json({
        status: "success",
        token,
      });
    }
  } catch {}
};
