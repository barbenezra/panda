const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    email: String,
    message: String
});

module.exports = mongoose.model('Comment', CommentSchema);