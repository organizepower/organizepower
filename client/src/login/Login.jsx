import React from 'react';

const Login = () => {
  return (
    <form method="post">
      <div>
        <p>Username:</p>
        <input type="text" name="username" />
      </div>
      <div>
        <p>Password:</p>
        <input type="password" name="password" />
      </div>
      <div>
        <input type="submit" value="Log In" />
      </div>
    </form>
  );
};

export default Login;
