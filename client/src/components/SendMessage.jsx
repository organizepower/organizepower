import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SendMessage = ({ currentMovement, user }) => {
  const {
    id,
    name,
    imageUrl,
    description,
  } = currentMovement;

  const [to, setTo] = useState('');
  const [body, setBody] = useState('');
  // set a var for automated message
  // name of the movement and a link

  const handleSubmit = () => {
    // create a body with a default text
    // to display for the user to see and when they click send the message
    // give an option on sending a message
    // look up text linmit
    debugger;
    axios.post('/twilio', { to, body })
      .then(message => {
        console.log(message);
      })
      .catch(err => console.log(err));
  };

  return (
    <form>
      <div>
        <label htmlFor="To">To:</label>
        <input
          type="tel"
          name="to"
          id="to"
          onChange={e => setTo(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Body">Body:</label>
        <textarea name="body" id="body" onChange={e => setBody(e.target.value)} />
      </div>
      <button type="submit" onClick={handleSubmit}>Send message</button>
    </form>

  );
};

export default SendMessage;
