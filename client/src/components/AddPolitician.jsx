import React, { useState } from 'react';
import axios from 'axios';

const AddPolitician = ({
  user,
  name,
  description,
  city,
  state,
  firstName,
  lastName,
}) => {
  const [polFirstName, setPolFirstName] = useState('');
  const [polLastName, setPolLastName] = useState('');
  const [polLoc, setPolLoc] = useState('');
  const [polPhoneNumber, setPolPhoneNumber] = useState('');
  const [polEmail, setPolEmail] = useState('');
  const [polMailingAddress, setPolMailingAddress] = useState('');
  const [polOrg, setPolOrg] = useState('');
  const [polPosition, setPolPosition] = useState('');
  const [polImageUrl, setPolImageUrl] = useState('');

  const handlePolSubmit = () => {
    debugger;
    const { id } = user;
    const movementObj = {
      name,
      description,
      location: `${city}, ${state}`,
      firstName,
      lastName,
      polFirstName,
      polLastName,
      polLoc,
      polPhoneNumber,
      polOrg,
      positionType: polPosition,
      polImageUrl,
      email: polEmail,
    };
    axios.post('/movement', { movementObj, id })
      .then(movement => console.log(movement))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Politician&apos;s First Name
            </label>
            <input onChange={(e) => setPolFirstName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="first name" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Politician&apos;s Last Name
            </label>
            <input onChange={(e) => setPolLastName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="last name" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Where is this Politician active?
            </label>
            <input onChange={(e) => setPolLoc(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="state or city or zip" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Phone number for this Politician, or their party
            </label>
            <input onChange={(e) => setPolPhoneNumber(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="phone #" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Email Address for this Politician, or their party
            </label>
            <input onChange={(e) => setPolEmail(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Mailing Address for this Politician, or their party
            </label>
            <input onChange={(e) => setPolMailingAddress(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Mailing Address" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Who is this Politician affiliated with?
            </label>
            <input onChange={(e) => setPolOrg(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Organization" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              What Position does this Politician hold?
            </label>
            <input onChange={(e) => setPolPosition(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="position or office" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Add an Image of this Politician
            </label>
            <input onChange={(e) => setPolImageUrl(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Image URL" />
          </div>
        </div>
        <button onClick={handlePolSubmit} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4">Add Politician and Create Movement!</button>
      </form>
    </div>
  );
};

export default AddPolitician;
