const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../db/index');
const { validPassword } = require('./passwordUtils');

const localStrat = new LocalStrategy({ passReqToCallback: true },
  // Here is the function that is supplied with the username and password field from the login POST request
  (username, password, cb) => {
    debugger;
    // Search the MongoDB database for the user with the supplied username
    User.findOne({ where: { username } })
      .then((user) => {
        /**
         * The callback function expects two values:
         *
         * 1. Err
         * 2. User
         *
         * If we don't find a user in the database, that doesn't mean there is an application error,
         * so we use `null` for the error value, and `false` for the user value
         */
        if (!user) { return cb(null, false); }

        /**
         * Since the function hasn't returned, we know that we have a valid `user` object.  We then
         * validate the `user` object `hash` and `salt` fields with the supplied password using our
         * utility function.  If they match, the `isValid` variable equals True.
         */
        const isValid = validPassword(password, user.hash, user.salt);

        if (isValid) {
          // Since we have a valid user, we want to return no err and the user object
          return cb(null, user);
        }
        // Since we have an invalid user, we want to return no err and no user
        return cb(null, false);
      })
      .catch((err) => {
        // This is an application error, so we need to populate the callback `err` field with it
        cb(err);
      });
  });

module.exports = {
  localStrat,
};
