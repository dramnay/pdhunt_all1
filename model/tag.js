const mongoose = require("mongoose");
const validator = require("../utils/validation_utils");
const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50,
        unique: true,
    },
    description: {
        type: String,
        trim: true,
        maxlength: 200,
    },
});

module.exports = mongoose.model("Tag", tagSchema);