/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Link,
} from 'react-router-dom';

const MovementListItem = ({
  movement,
  handleClick,
  movementsLeading,
  movementsFollowing,
}) => {
  const movementIds = movementsFollowing.map(mvmt => mvmt.id);

  const isFollowing = movement ? movementIds.includes(movement.id) : null;
  const {
    id,
    imageUrl,
    name,
    location,
    description,
    followers,
    emailCount,
    polFirstName,
    polLastName,
    polEmail,
  } = movement;
  
  // convert numbers to readable strings
  // shorten the description
  const shortDesc = description.slice(0, 250);

  return (
    <div className="max-w-sm h-full rounded overflow-hidden shadow-lg m-8 float-left">
      <Link to={`/movement/${id}`} onClick={() => handleClick(id)}>
        <img className="w-full" src={imageUrl} alt="Sunset in the mountains" />
      </Link>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <span className="text-gray-900 font-bold text-xl mb-2 hover:text-gray-500 mr-4">
            <Link to={`/movement/${id}`} onClick={() => handleClick(id)}>
              {name}
            </Link>
          </span>
          {isFollowing && (
            <p className="text-gray-700 text-base my-2">
              You are following this movement
            </p>
          )}
          <p className="text-gray-700 text-base my-2">
            {location}
          </p>
          <p className="text-gray-700 text-base my-2">
            Important Politician: {polFirstName}, {polLastName}
          </p>
          <p className="text-gray-700 text-base my-2">
            {shortDesc} . . . &nbsp;
            <Link to={`/movement/${id}`} onClick={() => handleClick(id)} className="text-gray-400 font-bold mb-2 hover:text-gray-500 mr-4">
              <i>continue reading</i>.
            </Link>
          </p>
          <div className="flex items-center mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current text-gray-600" viewBox="0 0 24 24"><path className="heroicon-ui" d="M20 22H4a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z" /></svg>
            <div className="text-sm mx-4">
              <p className="text-gray-600 leading-none">FOLLOWERS: {followers}</p>
              <p className="text-gray-600">EMAILS SENT: {emailCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Tailwind Card Example from Docs
<div className="max-w-sm w-full lg:max-w-full lg:flex">
<div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={cardImageStyle} title={name} />
<div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
  <div className="mb-8">
    <p className="text-sm text-gray-600 flex items-center">{location}</p>
    <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
    <p className="text-gray-700 text-base">{description}</p>
  </div>
  <div className="flex items-center">
    <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar" />
    <div className="text-sm">
      <p className="text-gray-900 leading-none">Jonathan</p>
      <p className="text-gray-600">Aug 18</p>
    </div>
  </div>
</div>
</div>
*/

export default MovementListItem;
