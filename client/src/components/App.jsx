import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import axios from 'axios';
import Navbar from './Navbar.jsx';

import { fakeUsers, fakeMovements } from '../services/fakeData';

const App = () => {
  const [user, setUser] = useState(fakeUsers[0]);
  const currentMovement = fakeMovements[0];
  
  const setUserState = (u) => {
    setUser(u);
  };

  // useEffect(() => {
  //   axios.get(`/movement/:${currentMovement.id}`)
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // });
  return (
    <div>
      <Navbar user={user} setUserState={setUserState} currentMovement={currentMovement} />

    </div>
  );
};

export default App;
