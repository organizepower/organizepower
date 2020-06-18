import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Explore from './Explore.jsx';

import { fakeUsers, fakeMovements } from '../services/fakeData';

const App = () => {
  const [user, setUser] = useState(fakeUsers[0]);
  const currentMovement = fakeMovements[0];

  const setUserState = (u) => {
    setUser(u);
  };

  return (
    <div>
      <Navbar user={user} setUserState={setUserState} currentMovement={currentMovement} />
      {/* <Explore /> */}
    </div>
  );
};

export default App;
