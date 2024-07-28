const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: [true, "Username must be unique"],
    },
    password: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: [true, "Email should be unique"],
    },
    contact: { type: Number, minLength: 10, maxLength: 10 },
    userType: {
      type: String,
      required: true,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
