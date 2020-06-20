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
      <MovementList
        user={user}
        movements={movements}
        handleMovementTitleClick={handleMovementTitleClick}
      />
    </div>
  );
};

export default Explore;
