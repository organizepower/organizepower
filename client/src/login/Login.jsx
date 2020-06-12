import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [value, setValue] = useState('');
  const handleClick = () => {
  //   // axios.post('/login')
  //   //   .then(data => {
  //   //     debugger
  //   //     console.log(data);
  //   //   })
  //   //   .catch(err => console.log(err));
  };

  return (
    <form>
      <div>
        <p>Username:</p>
        <input type="text" name="username" onChange={e => setValue(e.target.value)} />
      </div>
      <div>
        <p>Password:</p>
        <input type="password" name="password" />
      </div>
      <div>
        <input type="submit" value="Log In" onClick={handleClick} />
      </div>
    </form>
  );
};

export default Login;
