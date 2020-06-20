const { Router } = require('express');
const {
  getUserById,
  getMovementsFollowedByUser,
  getMovementsLedByUser,
} = require('../db/methods');

const profileRouter = Router();

profileRouter.get('/:id', (req, res) => {
  const { id } = req.params || {};
  const userId = parseFloat(id.slice(1));
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
profileRouter.get('/following/:id', (req, res) => {
  const { id } = req.params || {};
  const userId = parseFloat(id.slice(1));
  getMovementsFollowedByUser(userId)
    .then((movements) => {
      console.log(movements);
      res.send(movements);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

// a route to get the movements a user started
profileRouter.get('/leading/:id', (req, res) => {
  const { id } = req.params || {};
  const userId = parseFloat(id.slice(1));
  getMovementsLedByUser(userId)
    .then((movements) => {
      console.log(movements);
      res.send(movements);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = {
  profileRouter,
};
