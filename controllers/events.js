const Event = require('../models/event');
// const User = require('../models/user');
// const cloudinary = require('../utilities/cloudinary');
// const upload = require('../utils/multer');

module.exports = {
    index,
    new: newEvent,
    show,
    create,
    delete: deleteEvent,
    edit,
    update
}

async function index(req, res) {
    const events = await Event.find({});
    res.render('events/index', {title: 'All Events', events});
}

async function show(req, res) {
    const event = await Event.findById(req.params.id);
    res.render('events/show', {title: 'Event Details', event});
}

function newEvent(req, res) {
    const newEvent = new Event();
    const dt = newEvent.start;
    res.render('/events/new', { title: 'Create Event', errorMsg: ''});
}

async function create(req, res) {
    try {
        await Event.create(req.body);
        // Always redirect after CUDing data
        res.redirect('/events');
    } catch(err) {
        console.log(err);
        res.render('events/new', { title: 'Create Event', errorMsg: err.message });
    }
}

async function deleteEvent(req, res) {
    const event = await Event.findById( req.params.id );
    await event.deleteOne({});
    res.redirect('/events');
}

async function edit(req, res) {
    req.user.event = await Event.find({user: req.user._id})
    const event = await Event.findById(req.params.id);
    res.render('events/edit', { title: 'Edit Event', event})
}

async function update(req, res) {
    try {
    let event = await Event.findByIdAndUpdate(req.params.id, req.body);
    event.save();
    res.redirect(`/events/${req.params.id}`);
    } catch(err) {
        console.log(err);
    }
}