/* eslint-disable max-len */
const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
// const { apiRouter } = require('./api');
const { router } = require('./routes/login-signup');

const app = express();

const CLIENT_PATH = path.join(__dirname, '../client/dist');

app.use(express.static(CLIENT_PATH));
app.use(express.json());
app.use(cors());

// allow express to use sessions, not sure if the secret is necessary or helpful

// express middleware used to retrieve user sessions from a datastore can find the session object because the session Id is stored in the cookie, which is provided to the server on every request
// NOTE: cookie-parser middleware is no longer needed
app.use(session({
  // secret: process.env.SECRET,
  secret: 'some secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
  },
}));

// passport middleware must be used after express-session
app.use(passport.initialize());

// middleware to alter the req object and change the user value that is currently the session id (from the client cookie) into the true deserialized user object

app.use(passport.session());

app.use('/', router);

// basic "strategy" for user authentication
// passport.use(new LocalStrategy((username, password, done) => {
//   User.findOne({ username }, (err, user) => {
//     if (err) { return done(err); }
//     if (!user) {
//       return done(null, false, { message: 'Incorrect username.' });
//     }
//     if (!user.validPassword(password)) {
//       return done(null, false, { message: 'Incorrect password.' });
//     }
//     return done(null, user);
//   })
//     .catch(err => console.error(err));
// }));

// these two methods will keep user session alive


// app.post('/login',
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//   }));

// app.use('/', apiRouter);

module.exports = {
  app,
};
