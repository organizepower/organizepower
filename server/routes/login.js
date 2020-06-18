// import ReactDOMServer from 'react-dom/server';

const passport = require('passport');
const express = require('express');
const { Router } = require('express');

const loginRouter = Router();

loginRouter.post('/', passport.authenticate('local'), (req, res, next) => {
  console.log(req.user, res);
  res.send(
    req.user,
  );
});


// loginRouter.post('/',
//   passport.authenticate('local', { failureRedirect: '/' },
//     (req, res, next) => {
//       console.log(req, res, next);
//     }),
//   (req, res) => {
//     console.log('logged in', res);
//     const { username } = res;
//     const userInfo = {
//       username,
//     };
//     res.send('this user is logged in', userInfo);
//   });

module.exports.loginRouter = loginRouter;
