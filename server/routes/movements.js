const { Router } = require('express');
const { getMovement, addMovement, linkUserMovement } = require('../db/methods');

const movementRouter = Router();

movementRouter.get('/', (req, res) => {
  // this route will get the clicked on movement by the id
  console.log('movement routes been hit');
  // get all the movements
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
      console.log(movement);
      res.send(movement);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

movementRouter.post('/followers', (req, res) => {
  console.log('saved movement');
  // use the linkUserMovement method to join the user to a particular movement
  // const { user, movement } = req.body;
  // const userId = parseFloat(user.slice(1));
  // linkUserMovement(userId, movement)
  //   .then(result => {
  //     res.send(result);
  //   })
  //   .catch(err => console.log(err));
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
