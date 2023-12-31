const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    googleId: {
        type: String,
        required: true
    },
    email: String,
    avatar: String,
    cloudinary_id: {
        type: String
    },
    city: String,
    aboutMe: String,
    interests: String,
    eventsAttended: Number,
    eventsHosted: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);