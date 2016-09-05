
function signup (req, res, next) {
  var email = req.body.email;
  var password = req.body.password;

res.send({ success: 'true' })
}
// See if a user with a given email exists

// If a user with email does exist, return an error

// If a user with email does NOT exist, create save user record

// Respond to request indication the user was created







module.exports = {
  signup:   signup

}
