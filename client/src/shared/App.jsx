import React, { useState } from 'react';
// import axios from 'axios';

import { render } from 'react-dom';
import Navbar from './Navbar.jsx';
import Explore from '../explore/Explore.jsx';
import MovementList from './MovementList.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Explore />
    </div>
  );
};

export default App;
