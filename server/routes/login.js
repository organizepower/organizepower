import ReactDOMServer from 'react-dom/server';

const passport = require('passport');
const express = require('express');
const { User } = require('../db/index');



const router = express.Router();

router.get('/login', (req, res) => {
  console.log(req);
  // go to db and find user data
  // send data back the client side
});

router.post('/login',
  (req, res) => {
    console.log('logged in', req.user);
    const userInfo = {
      username: req.user.username,
    };
    res.send(userInfo);
  });
module.exports.router = router;
