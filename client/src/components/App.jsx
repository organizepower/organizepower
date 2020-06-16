import React, { useState } from 'react';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import axios from 'axios';

import Navbar from './Navbar.jsx';

import { fakeUsers, fakeMovements } from '../services/fakeData';

const App = () => {
  const [user, setUser] = useState(fakeUsers[0]);
  const movements = fakeMovements[0];
  // const user = fakeUsers[0];
  const setUserState = (u) => {
    setUser(u);
  };

  return (
    <div>
      <Navbar user={user} setUserState={setUserState} movements={movements} />
      {/* <MovementList /> */}

    </div>
  );
};

export default App;
