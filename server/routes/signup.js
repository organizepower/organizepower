const { Router } = require('express');
const crypto = require('crypto');
const { User } = require('../db/index');
const { genPassword } = require('../auth/passwordUtils');
const { addUser } = require('../db/methods');

const signupRouter = Router();

signupRouter.get('/', (req, res) => {
  console.log('signup routes been hit');
});

// create user in db
signupRouter.post('/', (req, res, next) => {
  console.log(req.body);
  const { password } = req.body.user;
  // using user password, generate salted pw
  const saltHash = genPassword(password);

  const { salt } = saltHash;
  const { hash } = saltHash;
  // extract user data from request object
  const {
    username,
    first_name,
    last_name,
    location,
    email,
    phone_number,
    image_url,
    bio,
  } = req.body.user;
  // define new user 
  const newUser = {
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
  };
  // use proprietary db method to store new user to db
  addUser(newUser);

  // res.redirect('/login');
});

module.exports = {
  signupRouter,
};
