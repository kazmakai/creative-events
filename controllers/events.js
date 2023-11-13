const Event = require('../models/event');
const cloudinary = require('../utilities/cloudinary');
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
    const user = req.user;
    res.render('events/show', {title: 'Event Details', event, user});
}

function newEvent(req, res) {
    res.render('events/new', { title: 'Create Event', errorMsg: ''});
}

async function create(req, res) {
    try {
        await Event.create(req.body);
        res.redirect('/events');
    } catch(err) {
        console.log(err);
        res.render('events/new', { title: 'Create Event', errorMsg: err.message });
    }
}

async function deleteEvent(req, res) {
    const event = await Event.findById( req.params.id );
    await event.deleteOne();
    res.redirect('/events');
}

async function edit(req, res) {
    req.user.event = await Event.find({user: req.user._id})
    const event = await Event.findById(req.params.id);
    res.render('events/edit', { title: 'Edit Event', event})
}

async function update(req, res) {
    try {
      if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path);
        const event = await Event.findByIdAndUpdate(req.params.id, {
          title: req.body.title,
          userName: req.body.userName,
          location: req.body.location,
          venueType: req.body.venueType,
          description: req.body.description,
          capacity: req.body.capacity,
          cost: req.body.cost,
          coverImage: result.secure_url,
          cloudinary_id: result.public_id
        });
        await event.save();
        res.redirect(`/events/${event._id}`);
      } else {
        const event = await Event.findByIdAndUpdate(req.params.id, {
          title: req.body.title,
          userName: req.body.userName,
          location: req.body.location,
          venueType: req.body.venueType,
          description: req.body.description,
          capacity: req.body.capacity,
          cost: req.body.cost
        });
        await event.save();
        res.redirect(`/events/${event._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  }
  