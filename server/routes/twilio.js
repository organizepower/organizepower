const { Router } = require('express');

const twilioRouter = Router();

const accountSid = 'AC67f1936ff63cf5e68d1934c372fd2230';
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

twilioRouter.post('/', (req, res) => {
  const { to, body } = req.body;
  client.messages
    .create({
      body,
      from: '+15017122661',
      to,
    })
    .then(message => {
      console.log(message.sid);
      res.send(message);
    });
  console.log(req);
});

module.exports = {
  twilioRouter,
};
