// import ReactDOMServer from 'react-dom/server';

const passport = require('passport');
const express = require('express');
const { User } = require('../db/index');



const router = express.Router();

router.get('/*', (req, res) => {
  console.log('this is from router.get in server/routes/login');
  // go to db and find user data
  // send data back the client side
});

router.post('/login',
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in', req.user);
    const { username, password } = req.body;
    const userInfo = {
      username,
      password,
    };
    res.send(userInfo);
  });

module.exports.router = router;
