/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { getMovements } from '../services/services';
import MovementList from './MovementList.jsx';

const Explore = ({
  user,
  movements,
  handleClick,
  movementsLeading,
  movementsFollowing,
}) => {
  // get all movements in the database
// debugger;
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
