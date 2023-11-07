const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: String,
    avatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);