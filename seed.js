require('dontenv').config();
require('./config/database');

const Event = require('./models/event');
const User = require('./models/user');
const Comment = require('./models/comment');