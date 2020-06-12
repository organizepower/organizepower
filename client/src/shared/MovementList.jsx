import React, { useState } from 'react';

import MovementListItem from './MovementListItem.jsx';

const MovementList = ({ movements }) => {
  return (
    <div>
      <strong>Movements</strong>
      {movements.map(movement => <MovementListItem movement={movement} key={movement.id} />)}
    </div>
  );
};

export default MovementList;
