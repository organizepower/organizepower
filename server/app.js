const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const { User } = require('./db/index');
// const { apiRouter } = require('./api');
const { router } = require('./routes/login');


const app = express();

const CLIENT_PATH = path.join(__dirname, '../client/dist');

app.use(express.static(CLIENT_PATH));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
// allow express to use sessions, not sure if the secret is necessary or helpful
app.use(session({ secret: "cats" }));


passport.use(new LocalStrategy((username, password, done) => {
  return User.findOrCreate({ where: { username, password } }).then((user) => {
    console.log(user);
    return user;
  });
}));


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
// passport.serializeUser((user, done) => {
  //   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });

// app.post('/login',
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//   }));

// app.use('/', apiRouter);
app.use('/', router);

module.exports = {
  app,
};
