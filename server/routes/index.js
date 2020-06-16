const { Router } = require('express');
const { movementRouter } = require('./movements');

const { routes } = Router();

routes.use('/movements', movementRouter);

module.exports = {
  routes,
};
