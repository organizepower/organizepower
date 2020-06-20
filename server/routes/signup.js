/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { Router } = require('express');
const { genPassword } = require('../auth/passwordUtils');
const { addUser, getUserByUsername } = require('../db/methods');

const signupRouter = Router();

signupRouter.post('/', (req, res, next) => {
  const newUser = req.body.user;
  const { username, password } = newUser;

  getUserByUsername(username)
    .then(user => {
      if (user !== null) {
        res.send({ message: 'invalidUser' });
      } else {
        const saltHash = genPassword(password);
        const { salt, hash } = saltHash;
        delete newUser.password;
        newUser.salt = salt;
        newUser.hash = hash;

        addUser(newUser)
          .then(() => res.send({ message: 'newUser' }));
      }
    })
    .catch(err => console.error(err));
});

module.exports = {
  signupRouter,
};
