const { Router } = require('express');

const profileRouter = Router();

profileRouter.get('/', (req, res) => {
  console.log('profile routes been hit');
});

module.exports = {
  profileRouter,
};
