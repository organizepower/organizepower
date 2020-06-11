import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MovementList from './MovementList.jsx';
import Profile from '../profile/Profile.jsx';
import Explore from '../explore/Explore.jsx';
import Login from '../login/Login.jsx';

const Navbar = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/MovementList">MovementList</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <Link to="/Explore">Explore</Link>
            </li>
            <li>
              <Link to="/login/signup">Login/signUp</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/MovementList">
            <MovementList />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/Explore">
            <Explore />
          </Route>
          <Route path="/login/signup">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navbar;
