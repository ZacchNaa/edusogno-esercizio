const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    unique: false,
    required: true,
  },
  last_name: {
    type: String,
    unique: false,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "admin",
    required: true,
  },
  token: String,
})

const User = mongoose.model("user", UserSchema)
module.exports = User