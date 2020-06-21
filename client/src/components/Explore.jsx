/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { getMovements } from '../services/services';
import MovementList from './MovementList.jsx';

const Explore = ({
  user,
  handleMovementTitleClick,
}) => {
  const [movements, setMovements] = useState([]);

  // gets movements from db to pass them down to movement list
  useEffect(() => {
    getMovements()
      .then(results => {
        setMovements(results.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="m-4">
      <span className="font-semibold text-2xl text-gray-500 tracking-tight m-8">EXPLORE MOVEMENTS</span>
      <p className="text-gray-700 text-lg m-8 w-1/2">Organize Power bridges the gap between the desire for change and impactful action. Users can engage directly with the movements that inspire them, as well as start their own movements. We give users the tools to encourage their followers to pressure public figures, and get the word out to their friends.</p>
      {movements.length
      && (
        <MovementList
          user={user}
          movements={movements}
          handleMovementTitleClick={handleMovementTitleClick}
        />
      )}
    </div>
  );
};

export default Explore;
