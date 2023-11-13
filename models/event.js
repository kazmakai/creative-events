// require Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Comment Schema */
const commentSchema = new Schema({
    content: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    avatar: String
}, {
    timestamps: true
});

/* Event Schema */
const eventSchema = new Schema({
    title: String,
    coverImage: {
        type: String,
        default: "/images/thumbnail_1.jpg"
    },
    date: {
        type: Date,
        default: () => {
            const date = new Date();
            date.setFullYear(date.getFullYear() + 1)
            return date;
        }
    },
    duration: Number,
    location: String,
    venueType: {
        type: String,
        enum: ['Indoor', 'Outdoor']
    },
    organizer: String, // Need to update to user who made the event
    description: String,
    eventType: {
        type: String,
        enum: [ 'Drawing', 'Painting', 'Music', 'Pottery', 'Crafts' ]
    },
    capacity: {
        type: String,
        enum: ['5-10', '10-15', '15-20', '20+']
    },
    cost: Number,
    attendees: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [
        commentSchema
    ]
}, {
    timestamps: true
});

// Compiling the Schema into a Model
module.exports = mongoose.model('Event', eventSchema);