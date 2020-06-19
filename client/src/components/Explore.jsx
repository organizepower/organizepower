/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { getMovements } from '../services/services';
import MovementList from './MovementList.jsx';

const Explore = ({
  user,
  handleClick,
  movementsLeading,
  movementsFollowing,
}) => {
  const [movements, setMovements] = useState([]);

  // get all movements in the database
  useEffect(() => {
    getMovements()
      .then(results => {
        setMovements(results.data);
      })
      .catch(err => console.error(err));
  }, []);
debugger;
  return (
    <div className="m-4">
      <span className="font-semibold text-2xl text-gray-500 tracking-tight m-8">EXPLORE MOVEMENTS</span>
      <MovementList
        movements={movements}
        handleClick={handleClick}
        movementsLeading={movementsLeading}
        movementsFollowing={movementsFollowing}
      />
    </div>
  );
};

export default Explore;
