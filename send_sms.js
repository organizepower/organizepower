const { TWILIO_AUTH_TOKEN } = process.env;

const accountSid = 'AC67f1936ff63cf5e68d1934c372fd2230';
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    from: '+15017122661',
    to: '+15558675310',
  })
  .then(message => console.log(message.sid));
