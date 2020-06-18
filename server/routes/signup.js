/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { Router } = require('express');
const { genPassword } = require('../auth/passwordUtils');
const { addUser } = require('../db/methods');

const signupRouter = Router();

signupRouter.post('/', (req, res, next) => {
  const {
    username,
    password,
    firstName,
    lastName,
    location,
    email,
    phoneNumber,
    imageUrl,
    bio,
  } = req.body.user;

  // using user password, generate salted pw
  const saltHash = genPassword(password);
  const { salt, hash } = saltHash;

  const newUser = {
    username,
    hash,
    salt,
    firstName,
    lastName,
    location,
    email,
    phoneNumber,
    imageUrl,
    bio,
  };

  // add user to database
  addUser(newUser);
});

module.exports = {
  signupRouter,
};
