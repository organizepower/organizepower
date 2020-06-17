// import ReactDOMServer from 'react-dom/server';

const passport = require('passport');
const express = require('express');
const { Router } = require('express');

const loginRouter = Router();

loginRouter.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    res.json(user);
  })(req, res, next);
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
