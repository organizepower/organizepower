import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import auth from '../services/auth';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authStatus, setAuthStatus] = useState('');
  const [userId, setUserId] = useState('');

  const handleClick = () => {
    // debugger;
    axios.post('/login', { username, password })
      .then(({ data }) => {
        const { message } = data;
        if (message === 'success') {
          const { user } = data;
          setUserId(user.id);
          setUser(user);
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
