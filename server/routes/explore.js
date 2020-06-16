const { Router } = require('express');

const exploreRouter = Router();

exploreRouter.get('/', (req, res) => {
  console.log('explore routes been hit');
});

module.exports = {
  exploreRouter,
};
