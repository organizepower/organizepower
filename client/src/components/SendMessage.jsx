import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SendMessage = () => {
  const [to, setTo] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    axios.post('/twilio', { to, body })
      .then(message => {
        console.log(message);
      })
      .catch(err => console.log(err));
  };

  return (
    <form>
      <div>
        <label htmlFor="to">To:</label>
        <input
          type="tel"
          name="to"
          id="to"
          onChange={e => setTo(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea name="body" id="body" onChange={e => setBody(e.target.value)} />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Send message
      </button>
    </form>

  );
};

export default SendMessage;
