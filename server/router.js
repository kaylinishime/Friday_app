var express = require('express');
var router = express.Router();
var authentication = require('./controllers/authentication');



router.post('/signup', authentication.signup)


module.exports = router;
