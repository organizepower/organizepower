import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movement = ({ currentMovement }) => {
  console.log(currentMovement);
  const {
    id,
    name,
    imageUrl,
    description,
  } = currentMovement;

  // const [movements, setMovements] = useState(fakeMovements[0]);
  // create a function to store who follows a movement
  const followMovement = () => {
    // store user id who follows a movements in movements tables
  };
  // create a function to send an email
  const email = () => {
    // send a request to google email API
  };
  // create a function to send a request to twilio
  const textMovement = () => {
    // axios request to twilio api
  };

  // useEffect(() => {
  //   axios.get(`/movement/:${id}`)
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // });

  return (
    <div>
      <div className="movement">
        <p className="text-gray-900 font-bold text-xl mb-2">Movement Title</p>
        <p className="movement">{name}</p>
        <p className="movement">Movement image</p>
        <img className="flex-col object-contain h-full w-48" src={imageUrl} alt={id} />
        <p className="text-gray-900 font-bold text-xl mb-2">Movement Description</p>
        <p className="movement">{description}</p>
        <div>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-blue-400 rounded shadow m-4" onClick={followMovement}>Follow Movement</button>
        </div>
      </div>
      <div>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-blue-400 rounded shadow m-4" onClick={email}>Write an Email</button>
      </div>
      <div>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-blue-400 rounded shadow m-4" onClick={textMovement}>Text Movement</button>
      </div>
    </div>
  );
};
export default Movement;

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
