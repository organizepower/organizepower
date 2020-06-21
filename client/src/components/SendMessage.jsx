import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  HashRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import { SettingsContext } from 'twilio/lib/rest/voice/v1/dialingPermissions/settings';

const SendMessage = ({
  currentMovement,
  getMovementById,
  user,
  setText,
}) => {
  const {
    id,
    name,
    imageUrl,
    description,
  } = currentMovement;

  const [to, setTo] = useState('');
  const [body, setBody] = useState('');
  const [messageButton, setmessageButton] = useState('Send Text');
  const [status, setStatus] = useState('pending');

  // got to make it to where a link to the movement can be sent
  // link to the specific movement to text to friends
  const urlLink = `https://op-version-3.uc.r.appspot.com/movement/${currentMovement.id}`;
  const defaultMessage = `[YOUR CUSTOM MESSAGE]
Please Join me in supporting ${name}! 
${urlLink}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById('send-text').reset();
    setmessageButton('Sending Text...');
    axios.post('/twilio', { to, body })
      .then(() => {
        setStatus('sent');
        setmessageButton('Sent');
        setText(false);
        axios.post('/movement/textCount/', { id })
          .then(() => {
            getMovementById(id);
          })
          .catch((err) => console.error(err));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="w-full max-w-xs m-4">
      <form id="send-text" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="To">
            Cell Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="include area code"
            type="tel"
            name="to"
            id="to"
            onChange={e => setTo(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Body">
            Message
          </label>
          <textarea className="shadow appearance-none border border-red-500 rounded w-full h-40 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="body" id="body" defaultValue={defaultMessage} onChange={e => setBody(e.target.value)} />
          <p className="text-red-500 text-xs italic">Please add custom message.</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleSubmit}>
            {messageButton}
          </button>
        </div>
      </form>
      {status === 'sent' && <Redirect to={`/movement/${id}`} />}
    </div>
  );
};

export default SendMessage;
