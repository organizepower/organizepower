import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  HashRouter as Router,
  Redirect,
} from 'react-router-dom';
import { SettingsContext } from 'twilio/lib/rest/voice/v1/dialingPermissions/settings';
/*
  a component that will handle sending request to the twilio api.
  this component is rendered by Movement.jsx
*/
const SendMessage = ({
  currentMovement,
  getMovementById,
  setText,
}) => {
  const {
    id,
    name,
  } = currentMovement;
 
  // twilio specific state variables
  const [to, setTo] = useState('');
  const [body, setBody] = useState('');
  // state variables for the button
  // we set the button name to send text
  const [messageButton, setmessageButton] = useState('Send Text');
  // create a status state that will be used to trigger a redirect to the movement page when the message is sent
  const [status, setStatus] = useState('pending');

  // got to make it to where a link to the movement can be sent
  // link to the specific movement to text to friends directly fromt the deployed site
  const urlLink = `https://op-version-3.uc.r.appspot.com/movement/${currentMovement.id}`;
  // create a default message to send plus a custom message that the user types in
  const defaultMessage = `[YOUR CUSTOM MESSAGE]
Please Join me in supporting ${name}! 
${urlLink}`;

 // handle submit fo when the butto is clicked
  const handleSubmit = (event) => {
    event.preventDefault();
    // when a text is sent represh the send message page
    document.getElementById('send-text').reset();
    // set the button name to sending text
    setmessageButton('Sending Text...');
    // do a post request to the twilio api, sending the number and the body message
    axios.post('/twilio', { to, body })
      .then(() => {
        // set the status state to 'send which will later trigger a redirect
        setStatus('sent');
        // when the request is sent, change the button text to Sent
        setmessageButton('Sent');
        setText(false);
        axios.post('/movement/textCount/', { id })
          .then(() => {
            getMovementById(id);
          })
          .catch((err) => console.error(err));
      })
      .catch(err => console.error(err));
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
          {/* text box area for the body of the message with a default messsage already set */}
          <textarea className="shadow appearance-none border border-red-500 rounded w-full h-40 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="body" id="body" defaultValue={defaultMessage} onChange={e => setBody(e.target.value)} />
          <p className="text-red-500 text-xs italic">Please add custom message.</p>
        </div>
        <div className="flex items-center justify-between">
          {/* message button and when clicked triggered the handleCLick */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleSubmit}>
            {messageButton}
          </button>
        </div>
      </form>
      {/* when the message is sent, redirect to that current movement page */}
      {status === 'sent' && <Redirect to={`/movement/${id}`} />}
    </div>
  );
};

export default SendMessage;
