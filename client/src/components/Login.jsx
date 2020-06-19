import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import { login } from '../services/services';

const Login = ({ setUser, setIsAuthenticated }) => {
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
        if (message === 'success') {
          setUserId(user.id);
          setUser(user);
          setIsAuthenticated(true);
        }
        setAuthStatus(message);
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <form>
        <div>
          <p>Username:</p>
          <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <p>Password:</p>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <input type="submit" value="Log In" onClick={handleClick} />
        </div>
      </form>
      {authStatus === 'invalidUser' && <Redirect to="/signup" />}
      {authStatus === 'invalidPassword' && <Redirect to="/login" />}
      {authStatus === 'success' && <Redirect to={`/profile/${userId}`} />}
    </div>
  );
};

export default Login;
