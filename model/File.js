const mongoose = require('mongoose');

const file = mongoose.Schema({
    originalname: String,
    ext: String,
    path: String
})

exports.File = mongoose.model("File", file);