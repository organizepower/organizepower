import React, { useState, useEffect } from 'react';
import Redirect from 'react-router-dom';
import MovementList from './MovementList.jsx';
import StartMovement from './StartMovement.jsx';
import { getMovementsLeading, getMovementsFollowing } from '../services/services';

const Profile = ({ user, handleMovementTitleClick }) => {
  const {
    username,
    firstName,
    lastName,
    imageUrl,
    bio,
  } = user;

  const [startMovementClicked, setStartMovementClicked] = useState(false);
  const [movementsLeading, setMovementsLeading] = useState([]);
  const [movementsFollowing, setMovementsFollowing] = useState([]);
  const [toExplore, setToExplore] = useState(false);

  useEffect(() => {
    if (user) {
      getMovementsLeading(user.id)
        .then(results => {
          setMovementsLeading(results.data);
        });
      getMovementsFollowing(user.id)
        .then(results => {
          setMovementsFollowing(results.data);
        });
    }
  }, []);

  return (
    <div className="p-8">
      <div className="lg:flex bg-gray-200 justify-between">
        <img className="flex-col object-contain h-full w-48" src={imageUrl} alt={username} />
        <div className="m-8">
          <p className="text-gray-900 font-bold text-xl mb-2">{firstName} {lastName}</p>
          <p className="text-gray-900 font-bold text-lg mb-2">User bio:</p>
          <p className="">{bio}</p>
        </div>
      </div>

      <div className="mt-4 mb-4">
        <button onClick={() => setStartMovementClicked(!startMovementClicked)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4">Start a Movement</button>
        {/* <button onClick={() => setToExplore(!toExplore)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Join a Movement</button> */}
      </div>
      {startMovementClicked && (
        <div className="">
          <StartMovement user={user} setMovementsLeading={setMovementsLeading} setStartMovementClicked={setStartMovementClicked} />
        </div>
      )}
      <div className="float-left max-w-sm rounded overflow-hidden shadow-lg p-8 m-8">
        <p className="text-gray-900 font-bold text-xl mb-2">Leader of These Movements:</p>
        <MovementList
          user={user}
          movements={movementsLeading}
          handleMovementTitleClick={handleMovementTitleClick}
        />
      </div>
      <div className="float-left max-w-sm rounded overflow-hidden shadow-lg p-8 m-8">
        <p className="text-gray-900 font-bold text-xl mb-2">Member of These Movements:</p>
        <MovementList
          user={user}
          movements={movementsFollowing}
          handleMovementTitleClick={handleMovementTitleClick}
        />
      </div>
    </div>
  );
};

export default Profile;
