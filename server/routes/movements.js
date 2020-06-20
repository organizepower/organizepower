const { Router } = require('express');
const {
  getMovement,
  addMovement,
  getAllMovements,
  linkUserMovement,
  addPolitician,
  addEmailCount,
  addFollower,
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
  console.log('movement route post /followers');
  // use the linkUserMovement method to join the user to a particular movement
  const { userId, movementId } = req.body;
  linkUserMovement(userId, movementId)
    .then(linked => {
      addFollower(movementId);
      res.send(linked).status(200);
    })
    .catch(err => res.sendStatus(400).send(err));
});

movementRouter.post('/', (req, res) => {
  // add a movement to db
  const { movementObj, id } = req.body;
  addMovement(movementObj, id)
    .then(movement => {
      res.send(movement);
    })
    .catch(err => {
      console.log(err);
    });
});

movementRouter.post('/emailCount/', (req, res) => {
  const { id } = req.body;
  const movementId = parseFloat(id);

  addEmailCount(movementId)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
    });
});

// movementRouter.post('/politician', (req, res) => {
//   // add politician and associate with movement
//   const { politicianObj } = req.body;
//   addPolitician(politicianObj)
//     .then(politician => {
//       console.log(politician);
//       res.send(politician);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });
// need a route to movementList

module.exports = {
  movementRouter,
};
