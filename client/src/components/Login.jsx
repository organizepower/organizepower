import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { login } from '../services/services';

const Login = ({
  setUser,
  setIsAuthenticated,
  setIsNewUser,
  isNewUser,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authStatus, setAuthStatus] = useState('');
  const [userId, setUserId] = useState('');
  // sending post request to login with username and password
  // then receive a response with a status message and user object if login is successful
  // set the userId and authStatus states on Login.jsx
  // set the user state on Navbar.jsx
  // the authStatus will determine which page the user is redirected to

  const handleClick = (event) => {
    event.preventDefault();
    login(username, password)
      .then(({ data }) => {
        const { message, user } = data;
        if (message === 'invalidPassword') {
          document.getElementById('login').reset();
        }
        if (message === 'success') {
          setUserId(user.id);
          setUser(user);
          setIsAuthenticated(true);
          setIsNewUser(false);
        }
        setAuthStatus(message);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="w-full max-w-xs m-4">
      {isNewUser && <p>Thank you for signing up! Please log in.</p>}
      <form id="login" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
          {authStatus === 'invalidPassword' && <p className="italic text-xs text-red-500">Invalid password - try again!</p>}
        </div>
        <div className="flex items-center justify-between">
          <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Log In" onClick={handleClick} />
        </div>
      </form>
      {authStatus === 'invalidUser' && <Redirect to="/signup" />}
      {authStatus === 'invalidPassword' && <Redirect to="/login" />}
      {authStatus === 'success' && <Redirect to={`/profile/${userId}`} />}
    </div>
  );
};

export default Login;
