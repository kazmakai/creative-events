const express = require('express');
const router = express.Router();
const upload = require('../utilities/multer');
// Connect users route to users controller
const usersController = require('../controllers/users');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');
// const cloudinary = require('../utils/cloudinary');


// GET /users/:id/edit 
router.get('/:id/edit', ensureLoggedIn, usersController.edit)
// PUT /users/:id
router.post('/:id', ensureLoggedIn, upload.single('image'), usersController.update)
// GET /users/:id
router.get('/:id', usersController.show);

module.exports = router;