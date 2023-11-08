const Event = require('../models/event');

module.exports = {
    create,
    delete: deleteComment
};

async function create(req, res) {
    const event = await Event.findById(req.params.id);
    // Add the user-centric info to req.body (the new comment)
    req.body.user = req.user._id;
    req.body.userName = req.user.userName;
    req.body.avatar = req.user.avatar;

    event.comments.push(req.body);
    try {
      // Save any changes made to the reviews doc
      await event.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/events/${event._id}`);
}

async function deleteComment(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  const event = await Event.findOne({ 'comments._id': req.params.id, 'comments.user': req.user._id });
  // Rogue user!
  if (!event) return res.redirect('/events');
  // Remove the review using the remove method available on Mongoose arrays
  event.comments.remove(req.params.id);
  // Save the updated event doc
  await event.save();
  // Redirect back to the event's show view
  res.redirect(`/events/${event._id}`);
}