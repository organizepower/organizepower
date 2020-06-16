import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import axios from 'axios';

import Navbar from './Navbar.jsx';
import Explore from '../explore/Explore.jsx';

import { fakeUsers } from '../services/fakeData';
import { fakeMovements } from '../services/fakeData';

const App = () => {
  const user = fakeUsers[0];
  const movements = fakeMovements[0];

  return (
    <div>
      <Navbar user={user} movements={movements} />
      {/* <MovementList /> */}

    </div>
  );
};

export default App;
