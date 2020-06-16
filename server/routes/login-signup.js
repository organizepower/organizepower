// import ReactDOMServer from 'react-dom/server';

const passport = require('passport');
const express = require('express');
const { User } = require('../db/index');
const { genPassword } = require('../auth/passwordUtils');

const router = express.Router();

router.get('/*', (req, res) => {
  console.log('this is from router.get in server/routes/login');
  // go to db and find user data
  // send data back the client side
});

router.post('/login',
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

router.post('/signup', (req, res, next) => {
  const saltHash = genPassword(req.body.password);

  const { salt } = saltHash;
  const { hash } = saltHash;
  const { 
    username,
    first_name,
    last_name,
    location,
    email,
    phone_number,
    image_url,
    bio,
  } = req.body;
  const newUser = new User({
    username,
    hash,
    salt,
    first_name,
    last_name,
    location,
    email,
    phone_number,
    image_url,
    bio,
  });
  newUser.create()
    .then((user) => {
      console.log(user);
    });
  res.redirect('/login');
});

module.exports.router = router;
