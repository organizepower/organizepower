import React, { useState } from 'react';

import MovementListItem from './MovementListItem.jsx';

const MovementList = ({ movements = [], handleClick }) => {
  return (
    <div>
      {movements.map(movement => <MovementListItem movement={movement} key={movement.id} handleClick={handleClick} />)}
    </div>
  );
};

export default MovementList;
