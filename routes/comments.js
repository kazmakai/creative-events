const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');
// Add ensureLoggedIn later


// POST /events/:id/comments (create comment for an event)
router.post('/events/:id/comments', commentCtrl.create);
// DELETE / comments
router.post('/comments/:id', commentCtrl.delete);

module.exports = router;