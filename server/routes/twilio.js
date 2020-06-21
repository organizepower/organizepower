const { Router } = require('express');
require('dotenv').config();

const twilioRouter = Router();

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

twilioRouter.post('/', (req, res) => {
  const { to, body } = req.body;
  client.messages
    .create({
      body,
      from: '+12029320475',
      to,
    })
    .then(message => {
      res.send(message);
    }).catch(err => console.error(err));
});

module.exports = {
  twilioRouter,
};
