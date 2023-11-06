const express = require('express');
const router = express.Router();
// Connect events route to events controller
const eventsController = require('../controllers/events');

// GET /events
router.get('/', eventsController.index);
// GET /events/new
router.get('/new', eventsController.new);
// GET /events/:id
router.get('/:id', eventsController.show);
// POST /events
router.post('/', eventsController.create);

module.exports = router;