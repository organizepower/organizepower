const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../db/index');
const { validPassword } = require('./passwordUtils');

passport.use(new LocalStrategy((username, password, cb) => {
  User.findOne({ username })
    .then((user) => {
      if (!user) { return cb(null, false) }

      // Function defined at bottom of app.js
      const isValid = validPassword(password, user.hash, user.salt);

      if (isValid) {
        return cb(null, user);
      }
      return cb(null, false);
    })
    .catch((err) => {
      cb(err);
    });
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = {
  passport,
};
