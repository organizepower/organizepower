const { Router } = require('express');
const { getMovement, addMovement } = require('../db/methods');

const movementRouter = Router();

movementRouter.get('/', (req, res) => {
  // this route will get the clicked on movement by the id
  console.log('movement routes been hit');
  // get all the movements
  // save to a variable
});

movementRouter.get('/:id', (req, res) => {
  // this route will get the clicked on movement by the id
  console.log('movement routes been hit');
  // save to a variable
  getMovement(req.body.params)
    .then(movement => {
      console.log(movement);
      res.send(movement);
    })
    .catch(err => {
      console.log(err);
    });
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
