import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import auth from '../services/auth';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleClick = () => {
    axios.post('/login', { username, password })
      .then(({ data }) => {
        const { message } = data;
        debugger;
        if (message === 'invalidUser') {
          // redirect to signup

        } else if (message === 'invalidPassword') {
          // redirect to login

        } else if (message === 'success') {
          const { user } = data;
          setUser(user);
          // redirect to profile page
        } else {
          // redirect to login?
        }
      })
      .catch(err => console.error(err));
  };

  return (
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
  );
};

export default Login;
