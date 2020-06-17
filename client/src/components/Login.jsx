import React, { useState } from 'react';
import axios from 'axios';
import auth from '../services/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleClick = () => {
    // send axios post to verify login
    console.log(username);
    debugger;
    axios.post('/login', { username, password })
      // this should be a message from passport saying the user is verified and may proceed
      .then(data => {
        debugger;
        // if login was successful, use auth.login to update user auth status to true
        // if not successful, leave auth status as false
        console.log('this is from Login.jsx axios.post.then', data.query);
      })
      .catch(err => console.log('this is from the Login.jsx handleclick.catch', err));
    // recieve go ahead from server that user is verified
    // tell react to re-render the explore page? or some other authenticated page
    // also update user auth status to true, or thumbs up or whatever
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
