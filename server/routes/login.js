/* eslint-disable no-unused-vars */
const { Router } = require('express');
const passport = require('passport');

const loginRouter = Router();

loginRouter.post('/', passport.authenticate('local'), (req, res, next) => {
  res.send(req.user);
});

module.exports.loginRouter = loginRouter;
