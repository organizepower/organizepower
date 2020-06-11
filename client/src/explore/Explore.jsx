import React, { useState, useEffect } from 'react';

import getMovements from '../services/movements';
import fakeData from '../services/fakeData';
import MovementList from '../shared/MovementList.jsx';

const Explore = () => {
  const [movements, setMovements] = useState(fakeData);

  // example of a function that could be used to update movements
  // this is currently returning a 404 error
  useEffect(() => {
    getMovements()
      .then(results => setMovements(results));
  });

  return (
    <div>
      <MovementList movements={movements} />
    </div>
  );
};

export default Explore;
