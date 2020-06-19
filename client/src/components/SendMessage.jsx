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
  // got to make it to where a link to the movement can be sent
  const urlLink = `/movement/${currentMovement.id}`;
  urlLink.link('localhost:8080');
  // set a variable for automated message
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
        <textarea className="resize border rounded focus:outline-none focus:shadow-outline" name="body" id="body" defaultValue={defaultMessage} onChange={e => setBody(e.target.value)} />
      </div>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-blue-400 rounded shadow m-4" type="submit" onClick={handleSubmit}>Send message</button>
    </form>

  );
};

export default SendMessage;
