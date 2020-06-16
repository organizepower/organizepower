const { Router } = require('express');

const signupRouter = Router();

signupRouter.get('/', (req, res) => {
  console.log('signup routes been hit');
});

module.exports = {
  signupRouter,
};
