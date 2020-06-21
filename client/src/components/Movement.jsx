import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SendMessage from './SendMessage.jsx';

const Movement = ({
  currentMovement,
  user,
  movementsFollowing,
  movementsLeading,
}) => {
  const {
    id,
    name,
    imageUrl,
    description,
    polFirstName,
    polLastName,
    polEmail,
    polPosition,
    location,
    followers,
    emailCount,
  } = currentMovement;

  // const [followers, setFollowers] = useState([]);
  const [buttonText, setButtonText] = useState('Follow this Movement');
  const [text, setText] = useState(false);
  const [emailClick, setEmailClick] = useState(false);
  const body = `Dear ${polFirstName} ${polLastName}, 
    I am [INSERT YOUR NAME}, one of your many constituents. There must be something done about this problem...[INSERT YOUR PERSONAL MESSAGE HERE]
  `;
  // create a function to store who follows a movement
  const followMovement = () => {
    // store user id who follows a movements in movements tables
    // when the movement is clicked add that movement to the users table
    axios.post('/movement/followers', { user: user.id, movement: id })
      .then(follow => {
        setButtonText('Following ✓');
        console.log(follow);
      })
      .catch(err => console.log(err));
  };
  // create a function to send an email
  const email = () => {
    // send a request to google email API
    setEmailClick(true);
  };
  // create a function to send a request to twilio
  const textMovement = () => {
    setText(true);
  };

  useEffect(() => {
    axios.get(`/movement/:${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    const movementIds = movementsFollowing.length
      ? movementsFollowing.map(mvmt => mvmt.id)
      : null;
    const isFollowing = currentMovement
      && movementIds
      ? movementIds.includes(currentMovement.id)
      : null;

    if (isFollowing) {
      setButtonText('following');
    }
  }, []);
  return (
    <div className="container mx-auto px-4 m-8 grid grid-cols-2 gap-4">
      <div>
        <div>
          <img className="object-cover h-48 w-full float-left" src={imageUrl} alt={id} />
          <p className="text-gray-900 font-bold text-3xl mb-2">{name}</p>
          <p className="text-gray-700 text-xl my-2">{location}</p>
          <p className="text-gray-700 text-lg my-2">Important Politician: {polFirstName} {polLastName}, {polPosition}</p>
          <p className="text-gray-900 text-base my-2">{description}</p>
        </div>
        <Comments movement={currentMovement} user={user} />
      </div>
      <div className="m-8">
        <div>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-blue-400 rounded shadow m-4" onClick={followMovement}>{buttonText}</button><br />
          <a href={`mailto:${polEmail}?&subject=${name}&body=${body}`} target="_blank" rel="noopener noreferrer">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-blue-400 rounded shadow m-4" onClick={email}>Email {polFirstName} {polLastName}</button>
          </a><br />
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-blue-400 rounded shadow m-4" onClick={textMovement}>Text a Friend</button><br />
        </div>
        {text && <SendMessage currentMovement={currentMovement} user={user} setText={setText} />}
        <div className="flex items-center mt-8 m-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current text-gray-600" viewBox="0 0 24 24"><path className="heroicon-ui" d="M20 22H4a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z" /></svg>
          <div className="text-sm mx-4">
            <p className="text-gray-600 leading-none">FOLLOWERS: {followers}</p>
            <p className="text-gray-600">EMAILS SENT: {emailCount}</p>
          </div>
        </div>
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
