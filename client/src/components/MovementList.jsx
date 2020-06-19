import React, { useState } from 'react';

import MovementListItem from './MovementListItem.jsx';

const MovementList = ({
  movements = [],
  handleClick,
  movementsLeading,
  movementsFollowing,
}) => {
  debugger;
  return (
    <div className="flex flex-wrap -mb-4">
      {movements.map(movement => (
        <MovementListItem
          movement={movement}
          key={movement.id}
          handleClick={handleClick}
          movementsLeading={movementsLeading}
          movementsFollowing={movementsFollowing}
        />
      ))}
    </div>
  );
};

export default MovementList;
