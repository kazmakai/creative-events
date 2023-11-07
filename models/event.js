// require Mongoose
const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schemma class
const Schema = mongoose.Schema;

// Defining the basic schema for the event Model
const eventSchema = new Schema({
    title: String,
    date: {
        type: Date,
        default: () => {
            const date = new Date();
            date.setFullYear(date.getFullYear() + 1)
            return date;
        }
    },
    duration: Number,
    location: String, // Add Google Maps API (low priority)
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
    capacity: String, // Need to update with actual users
    cost: Number,
    attendees: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    going: Boolean,
    comments: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
}, {
    timestamps: true
});

// Compiling the Schema into a Model
module.exports = mongoose.model('Events', eventSchema);