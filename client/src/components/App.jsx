import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';

import { fakeMovements } from '../services/fakeData';

const App = () => {
  // const [user, setUser] = useState();
  const currentMovement = fakeMovements[0];

  return (
    <div>
      <Navbar currentMovement={currentMovement} />
      {/* <Explore /> */}
      <Redirect to="/#/explore" />
    </div>
  );
};

export default App;
