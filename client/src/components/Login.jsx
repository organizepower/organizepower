import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { login } from '../services/services';

/**
 * @param {function} setUser - sets the user state on the navbar component
 * @param {function} setIsAuthenticated - sets the setIsAuthenticated state on th navbar component
 * @param {function} setIsNewUser - sets the isNewUser state on the navbar component
 * (only used to change the state back to false)
 * @param {boolean} isNewUser - state on navbar that will be true if a user just signed up
 */
const Login = ({
  setUser,
  setIsAuthenticated,
  setIsNewUser,
  isNewUser,
}) => {
  // states managed for form submission
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // state managed to handle redirects after form submission
  const [authStatus, setAuthStatus] = useState('');
  const [userId, setUserId] = useState('');

  const handleLoginSubmit = event => {
    event.preventDefault();
    login(username, password)
      .then(({ data: { message, user } }) => {
        if (message === 'invalidPassword') {
          setUsername('');
          setPassword('');
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
    <div className="w-full max-w-xs m-10">
      {isNewUser && <p className="italic text-xs text-gray-500 m-4">Thank you for signing up! Please log in.</p>}
      <form id="login" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username:
          </label>
          <input value={username} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input value={password} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
          {authStatus === 'invalidPassword' && <p className="italic text-xs text-red-500">Invalid password - try again!</p>}
        </div>
        <div className="flex items-center justify-between">
          <input className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-2 float-right" type="submit" value="Log In" onClick={handleLoginSubmit} />
        </div>
      </form>
      {/* invalid user will redirect to signup */}
      {/* invalid password will clear form and reload login */}
      {/* success will redirect to the profile of the user */}
      {authStatus === 'invalidUser' && <Redirect to="/signup" />}
      {authStatus === 'invalidPassword' && <Redirect to="/login" />}
      {authStatus === 'success' && <Redirect to={`/profile/${userId}`} />}
    </div>
  );
};

export default Login;
