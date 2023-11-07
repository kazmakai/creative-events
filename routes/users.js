const express = require('express');
const router = express.Router();
const upload = require('../utilities/multer');
// Connect users route to users controller
const usersController = require('../controllers/users');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /users/:id/edit 
router.get('/:id/edit', ensureLoggedIn, usersController.edit)
// PUT /users/:id
router.put('/:id', ensureLoggedIn, upload.single('image'), usersController.update)
// SHOW /users/:id
router.get('/:id', usersController.show);

module.exports = router;