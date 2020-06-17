const { Router } = require('express');
const { movementRouter } = require('./movements');
const { exploreRouter } = require('./explore');
const { profileRouter } = require('./profile');
const { signupRouter } = require('./signup');
const { loginRouter } = require('./login');

const routes = Router();

routes.use('/movement', movementRouter);
routes.use('/explore', exploreRouter);
routes.use('/profile', profileRouter);
routes.use('/signup', signupRouter);
routes.use('/login', loginRouter);

module.exports = {
  routes,
};
