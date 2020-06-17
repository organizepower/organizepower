const { Router } = require('express');

const twilioRouter = Router();

twilioRouter.post('/', (req, res) => {
  console.log('can send a twillio  messeage');
});

module.exports = {
  twilioRouter,
};
