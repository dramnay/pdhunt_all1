const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 200,
    unique: true,
  },

  password: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
