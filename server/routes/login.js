// import ReactDOMServer from 'react-dom/server';

const passport = require('passport');
const express = require('express');
const { Router } = require('express');

const loginRouter = Router();

loginRouter.post('/',
  // passport.authenticate('login', { failureRedirect: '/login' }, (user) => {
  //   console.log('passport.authenticate did this', user);
  // }),
  (req, res) => {
    console.log('logged in', req);
    const { username, password } = req.body;
    const userInfo = {
      username,
      password,
    };
    res.send(userInfo);
  });

module.exports.loginRouter = loginRouter;
