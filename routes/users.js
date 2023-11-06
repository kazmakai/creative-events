var express = require('express');
var router = express.Router();
// Connect users route to users controller
const usersController = require('../controllers/users');

// GET /users
router.get('/', usersController.index);

module.exports = router;
