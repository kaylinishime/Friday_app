var jwt = require('jwt-simple');
var config = require('../config');
var models = require('../models/index');


function tokenForUser(user) {
  var timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat:timestamp }, config.secret);
}


function signup (req, res, next) {
// If email or password is not filled out, return error
  if(!req.body.email || !req.body.password) {
    return res.status(422).send({error: 'You must provide email and password'})
    }
  models.User.create({
    email: req.body.email,
    password: req.body.password
    }).then(function(user){
    res.json({ token: tokenForUser(user)});
    })
  }


// See if a user with a given email exists

// If a user with email does exist, return an error

// If a user with email does NOT exist, create save user record

// Respond to request indication the user was created







module.exports = {
  signup:   signup

}
