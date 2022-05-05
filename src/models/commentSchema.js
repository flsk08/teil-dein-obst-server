const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    id: String,
    comment: String,
    timestamp: Date,
    user: String,
    avatar: String,
    tree: String
});

module.exports = mongoose.model('Comment', commentSchema);


