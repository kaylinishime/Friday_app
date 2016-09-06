var passport = require('passport');
var models = require('../models/index');
var config = require('../config')
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt


// Setup options for JWT Strategy
var jwtOptions = {};

// Create JWT Strategy
// payload is the decoded jwt token
// See if the user ID in the payload exists in our database
// If it does, call 'done' with a user objet
var jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){

});

// Tell passport to use this Strategy
