const mongoose = require("mongoose");
const { isEmail } = require("validator");
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please enter your fullname"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please enter an email"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "please enter a password"],
      minlength: [6, "password must be of 6 characters"],
    },
    phone: {
      type: String,
      required: [true, "please enter your phone number"],
    },
    // refundable amount available for customer
    refund: {
      type: mongoose.Types.Decimal128,
    },
    imageUrl: {
      type: String,
    },
    userType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
UserSchema.path("email").validate((value) => {
  if (!value.includes("@")) {
    throw new Error("Please enter a valid email");
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
