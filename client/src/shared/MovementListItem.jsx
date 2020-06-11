import React from 'react';

const MovementListItem = ({ movement }) => {
  const {
    imageUrl,
    name,
    location,
    description,
    followers,
    emailsSent,
  } = movement;

  return (
    <div>
      <div>
        <img className="" src={imageUrl} alt={name} />
      </div>
      <div>
        <p>Movement Title: {name}</p>
        <p>Location: {location}</p>
        <p>Description: {description}</p>
        <p>Followers: {followers}</p>
        <p>emailsSent: {emailsSent}</p>
      </div>
    </div>
  );
};

export default MovementListItem;
