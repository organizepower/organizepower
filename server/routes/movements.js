const { Router } = require('express');
const {
  getMovement,
  addMovement,
  getAllMovements,
  linkUserMovement,
} = require('../db/methods');

const movementRouter = Router();

// this route will get the clicked on movement by the id
movementRouter.get('/', (req, res) => {
  // get all the movements
  getAllMovements()
    .then(movements => {
      res.send(movements);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
  // save to a variable
});

movementRouter.get('/:id', (req, res) => {
  // this route will get the clicked on movement by the id
  console.log('movement route by id been hit');
  const { id } = req.params || {};
  const movementId = parseFloat(id.slice(1));
  // save to a variable
  getMovement(movementId)
    .then(movement => {
      res.send(movement);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

movementRouter.post('/followers', (req, res) => {
  // use the linkUserMovement method to join the user to a particular movement
  const { user, movement } = req.body;
  linkUserMovement(user, movement)
    .then(linked => {
      res.send(linked).status(200);
    })
    .catch(err => res.sendStatus(400).send(err));
});

movementRouter.post('/', (req, res) => {
  // add a movement to db
  // addMovement(req.body)
  //   .then(movement => {
  //     console.log(movement);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
});

// need a route to movementList

module.exports = {
  movementRouter,
};
