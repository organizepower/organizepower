import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import axios from 'axios';
import Navbar from './Navbar.jsx';
import Explore from './Explore.jsx';

import { fakeMovements } from '../services/fakeData';

const App = () => {
  // const [user, setUser] = useState();
  const currentMovement = fakeMovements[0];

  // useEffect(() => {
  //   getUserById(1)
  //     .then(res => {
  //       debugger;
  //       console.log(res);
  //       setUser(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // });

  return (
    <div>
      <Navbar currentMovement={currentMovement} />
      {/* <Explore /> */}
    </div>
  );
};

export default App;
