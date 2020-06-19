/* eslint-disable no-unused-vars */
const { Router } = require('express');
const passport = require('passport');

const loginRouter = Router();

loginRouter.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    const { invalidPassword } = info || false;
    if (err) {
      return next(err); // will generate a 500 error
    }
    if (invalidPassword) {
      return res.send({ message: 'invalidPassword' });
    }
    if (!user) {
      return res.send({ message: 'invalidUser' });
    }
    // ***********************************************************************
    // "Note that when using a custom callback, it becomes the application's
    // responsibility to establish a session (by calling req.login()) and send
    // a response."
    // Source: http://passportjs.org/docs
    // ***********************************************************************
    req.login(user, loginErr => {
      if (loginErr) {
        return next(loginErr);
      }
      return res.send({ user, message: 'success' });
    });
  })(req, res, next);
});

module.exports.loginRouter = loginRouter;
