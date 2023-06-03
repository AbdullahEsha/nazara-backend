const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../models/User");

module.exports.verify = async (req, res, next) => {
  try {
    let token;
    if (req.cookies.jwt) token = req.cookies.jwt;
    else if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // eslint-disable-next-line prefer-destructuring
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      return "Access Denied ⁣⁣🔴";
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);
    if (!user) {
      return next(
        new AppError(
          "The user belonging to this token does no longer exist.",
          401
        )
      );
    }
    req.user = user;
    return next();
  } catch (err) {
    res.status(422).json({
      status: "Access Denied 🔴",
      message: err,
    });
  }
};
