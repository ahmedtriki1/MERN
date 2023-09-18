// import mongoose to build model
const mongoose = require("mongoose");

// the model - the rules the everyone need to follow
const AuthorsSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength:[3, "{PATH} must be at least 3 chars"]
    }

}, {timestamps: true})

const Authors = mongoose.model("Authors",AuthorsSchema);

module.exports = Authors;