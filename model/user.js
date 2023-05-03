const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 200,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
    maxlength: 300,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
