const { Router } = require('express');
const { movementRouter } = require('./movements');
const { exploreRouter } = require('./explore');
const { profileRouter } = require('./profile');
const { signupRouter } = require('./signup');

const routes = Router();

routes.use('/movement', movementRouter);
routes.use('/explore', exploreRouter);
routes.use('/profile', profileRouter);
routes.use('/signup', signupRouter);

module.exports = {
  routes,
};
