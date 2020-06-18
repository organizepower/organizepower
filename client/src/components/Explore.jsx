/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { getMovements } from '../services/services';
import { fakeMovements } from '../services/fakeData';
import MovementList from './MovementList.jsx';

const Explore = ({ user, handleClick }) => {
  const [movements, setMovements] = useState([]);

  // get all movements in the database
  useEffect(() => {
    getMovements()
      .then(results => {
        setMovements(results.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <MovementList movements={movements} handleClick={handleClick} />
    </div>
  );
};

export default Explore;
