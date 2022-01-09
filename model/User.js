const mongoose = require('mongoose');

const user = mongoose.Schema({
    email: String,
    password: String
})

exports.User = mongoose.model("User", user)
