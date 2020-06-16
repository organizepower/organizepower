import React, { useState, useEffect } from 'react';
import { fakeMovements } from '../services/fakeData';

const Movement = () => {
  const [movements, setMovements] = useState(fakeMovements[0]);
  // create a function to store who follows a movement
  const followMovement = () => {
    // store user id who follows a movements in movements tables
  };
  // create a function to send an email
  const email = () => {
    // send a request to google email API
  };
  // create a function to send a request to twilio
  const textMovement = () => {
    // axios request to twilio api
  };
  return (
    <div>
      <div className="movement">
        <p className="movement">Movement Title:</p>
        <p className="movement">{movements.name}</p>
        <p className="movement">Movement image:</p>
        <img className="flex-col object-contain h-full w-48" src={movements.imageUrl} alt={movements.id} />
        <p className="movement">Movement Description:</p>
        <p className="movement">{movements.description}</p>
        <div>
          <button type="button" onClick={followMovement}>Follow Movement</button>
        </div>
      </div>
      <div>
        <button type="button" onClick={email}>Write an Email</button>
      </div>
      <div>
        <button type="button" onClick={textMovement}>Text Movement</button>
      </div>
    </div>
  );
};
export default Movement;
