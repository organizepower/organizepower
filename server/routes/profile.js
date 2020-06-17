const { Router } = require('express');
const {
  getUserById,
  getUserByUsername,
  addMovement,
  getMovement,
} = require('../db/methods');

const profileRouter = Router();

profileRouter.get('/id', (req, res) => {
  // get user information by ID form db
  // getUserById();
  console.log('profile routes been hit');
});

// a route to get the movements a user created by userID
profileRouter.get('/create', (req, res) => {
  // getMovement();
  console.log('got a user created movement');
});

// a post route for users to start a movement put into the db by userID
profileRouter.post('/create', (req, res) => {
  console.log(req.body);
  // const { movement, user } = req.body;
  // addMovement(movement, user)
  // .then()
});

// a route to get the movements a user started
profileRouter.get('/leaders', (req, res) => {
  //
});

// profileRouter.get('/create', (req, res) => {

// });

module.exports = {
  profileRouter,
};
