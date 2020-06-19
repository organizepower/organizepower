import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  HashRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

const SendMessage = ({ currentMovement, user }) => {
  const {
    id,
    name,
    imageUrl,
    description,
  } = currentMovement;

  const [to, setTo] = useState('');
  const [body, setBody] = useState('');
  const [messageButton, setmessageButton] = useState('Send Movement');
  const [status, setStatus] = useState('pending');
  // got to make it to where a link to the movement can be sent
  const urlLink = `https://op-version-3.uc.r.appspot.com/movement/${currentMovement.id}`;
  const defaultMessage = `Please Join me in supporting ${name} ${imageUrl} please click this link to checkout the movement ${urlLink}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    setmessageButton('Sending Movement....');
    setStatus('Sent');
    axios.post('/twilio', { to, body })
      .then(message => {
        console.log(message);
        console.log(status);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
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
          {/* {status === 'sent' && <Redirect to={`/movement/${id}`} />} */}
        </div>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-blue-400 rounded shadow m-4" type="submit" onClick={handleSubmit}>{messageButton}</button>
      </form>
      <Route>
        {status === 'sent' && <Redirect to={`/movement/${id}`} />}
      </Route>
    </div>
  );
};

export default SendMessage;
