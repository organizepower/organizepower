const passport = require('passport');
const express = require('express');
const { User } = require('../db/index');


const router = express.Router();

router.get('/login', (req, res) => {
  console.log(req);
  res.send('login');
});

router.post('/login', (req, res) => {
  console.log('logged in', req.body);
  // const userInfo = {
  //   username: req.user.username,
  // };
  res.send(req.body);
});
module.exports.router = router;
