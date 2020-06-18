const { Router } = require('express');
const {
  getUserById,
  getUserByUsername,
  addMovement,
  getMovement,
} = require('../db/methods');

const profileRouter = Router();

profileRouter.get('/:id', (req, res) => {
  console.log('get user by id route by id been hit');
  const { id } = req.params || {};
  const userId = parseFloat(id.slice(1))
  // get user information by ID form db
  getUserById(userId)
    .then((user) => {
      console.log(user);
      res.send(user);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
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
