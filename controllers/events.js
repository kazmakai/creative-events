const Event = require('../models/event');


module.exports = {
    index,
    new: newEvent,
    show,
    create
}

async function index(req, res) {
    const events = await Event.find({});
    console.log(events);
    res.render('events/index', {title: 'All Events', events});
}

async function show(req, res) {
    const event = await Event.findById(req.params.id);
    res.render('events/show', {title: 'Event Details', event});
}

function newEvent(req, res) {
    const newEvent = new Event();
    // Obtain the default date
    const dt = newEvent.start;
    // Format the date for the value attricbute fo the input
    // let startDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    // startDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('events/new', { title: 'Create Event', errorMsg: ''});
}

async function create(req, res) {
    try {
        await Event.create(req.body);
        // Always redirect after CUDing data
        res.redirect('/events');
    } catch (err) {
        console.log(err);
        res.render('events/new', { title: 'Create Event', errorMsg: err.message });
    }
}