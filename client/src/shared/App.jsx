import React from 'react';
// import axios from 'axios';

import Navbar from './Navbar.jsx';
import Explore from '../explore/Explore.jsx';

const App = () => {
  return (
    <div>
      <h1>OrganizePower</h1>
      <Navbar />
      <Explore />
    </div>
  );
};

export default App;
