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
  const defaultMessage = `Please Join me in supporting ${name}`;
  // name of the movement and a link

  const handleSubmit = () => {
    // give an option on sending a message
    // look up text limit
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
        <textarea name="body" id="body" defaultValue={defaultMessage} onChange={e => setBody(e.target.value + defaultMessage)} />
      </div>
      <button type="submit" onClick={handleSubmit}>Send message</button>
    </form>

  );
};

export default SendMessage;
