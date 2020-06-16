const { Router } = require('express');

const movementRouter = Router();

movementRouter.get('/', (req, res) => {
  console.log('movement routes been hit');
});


module.exports = {
  movementRouter,
};
