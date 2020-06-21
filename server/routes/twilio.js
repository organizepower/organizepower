const { Router } = require('express');
require('dotenv').config();

const twilioRouter = Router();

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// twilio route to send a text message
twilioRouter.post('/', (req, res) => {
  // body will be composed of a phone number and a text body
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
