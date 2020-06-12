import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import axios from 'axios';

import { render } from 'react-dom';
import Navbar from './Navbar.jsx';
import Explore from '../explore/Explore.jsx';
import MovementList from './MovementList.jsx';
import Profile from '../profile/Profile.jsx';
import Login from '../login/Login.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <MovementList /> */}

    </div>
  );
};

export default App;
