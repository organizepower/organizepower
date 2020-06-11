import React, { useState } from 'react';
// import axios from 'axios';

import Navbar from './Navbar.jsx';
import Explore from '../explore/Explore.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Explore />
    </div>
  );
};

export default App;
