const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comments');
// Add ensureLoggedIn later
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /events/:id/comments (create comment for an event)
router.post('/events/:id/comments', ensureLoggedIn, commentController.create);
// DELETE / comments
router.delete('/comments/:id', ensureLoggedIn, commentController.delete);

module.exports = router;