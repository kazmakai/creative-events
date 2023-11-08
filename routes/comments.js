const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');
// Add ensureLoggedIn later
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /events/:id/comments (create comment for an event)
router.post('/events/:id/comments', ensureLoggedIn, commentsController.create);
// DELETE / comments
router.delete('/events/:id', ensureLoggedIn, commentsController.delete);

module.exports = router;