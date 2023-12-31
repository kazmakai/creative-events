const express = require('express');
const router = express.Router();
const upload = require('../utilities/multer');
// Connect events route to events controller
const eventsController = require('../controllers/events');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');
// const cloudinary = require('../utilities/cloudinary');


// GET /events
router.get('/', eventsController.index);
// GET /events/new
router.get('/new', ensureLoggedIn, eventsController.new);
// POST /events
router.post('/', eventsController.create);
// GET /events/:id
router.get('/:id', eventsController.show);
// DELETE / events
router.delete('/:id', eventsController.delete);
// GET /events/:id/edit
router.get('/:id/edit', eventsController.edit);
// PUT /events/:id
router.post('/:id', ensureLoggedIn, upload.single('coverImage'), eventsController.update);

module.exports = router;