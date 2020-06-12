const passport = require('passport');
const express = require('express');
const { User } = require('../db/index');


const router = express.Router();

router.get('/login', (req, res) => {
 console.log(req);
  res.send('login');
});

// router.post('/login', passport.authenticate('local'),
//   (req, res) => {
//     console.log('logged in', req.user);
//     const userInfo = {
//       username: req.user.username,
//     };
//     res.send(userInfo);
//   });
module.exports.router = router;
