import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
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
    createdAt,
    location,
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
      <div className="container mx-auto px-4 m-8 grid grid-flowgrid-cols-2 gap-4">
        <div>
          <div className="lg:flex bg-gray-200 w-4/6 sm:w-full md:w-full lg:w-4/6 xl:w-4/6 rounded overflow-hidden shadow-lg">
            <img className="flex-col object-contain h-auto w-auto" src={imageUrl} alt={username} />
            <div className="m-8">
              <p className="text-gray-900 font-bold text-xl mb-2">{firstName} {lastName}</p>
              <p className="text-gray-900 text-lg mb-2">{location}</p>
              <p className="text-gray-900 text-base my-2">{bio}</p>
              <p className="text-gray-900 text-sm italic my-4">Member of Organize Power for {moment(createdAt).fromNow(true)}.</p>
            </div>
          </div>
        </div>

        <div className="m-4">
          <button onClick={() => setStartMovementClicked(!startMovementClicked)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mb-8 border border-gray-400 rounded shadow mr-4">Start a Movement</button>
          <Link to="/explore"><button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mb-8 border border-gray-400 rounded shadow mr-4">Join a Movement</button></Link>
          {startMovementClicked && (
            <div className="">
              <StartMovement
                user={user}
                setMovementsLeading={setMovementsLeading}
                setStartMovementClicked={setStartMovementClicked}
              />
            </div>
          )}
        </div>
      </div>
      <div className="container mx-auto">
        <div className="float-left max-w-lg rounded overflow-hidden shadow-lg p-8 m-8">
          <p className="text-gray-900 font-bold text-xl mb-2">Leader of These Movements:</p>
          <MovementList
            user={user}
            movements={movementsLeading}
            handleMovementTitleClick={handleMovementTitleClick}
          />
        </div>
        <div className="float-left max-w-lg rounded overflow-hidden shadow-lg p-8 m-8">
          <p className="text-gray-900 font-bold text-xl mb-2">Member of These Movements:</p>
          <MovementList
            user={user}
            movements={movementsFollowing}
            handleMovementTitleClick={handleMovementTitleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
