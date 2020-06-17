// import ReactDOMServer from 'react-dom/server';

const passport = require('passport');
const express = require('express');

const loginRouter = express.Router();

loginRouter.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    console.log('logged in', req.user);
    const { username, password } = req.body;
    const userInfo = {
      username,
      password,
    };
    res.send(userInfo);
  });

module.exports.loginRouter = loginRouter;
