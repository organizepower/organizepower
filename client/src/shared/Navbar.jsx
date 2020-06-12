import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import MovementList from './MovementList.jsx';
import Profile from '../profile/Profile.jsx';
import Explore from '../explore/Explore.jsx';
import Login from '../login/Login.jsx';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/explore">Explore Page</Link></li>
        <li><Link to="/profile">Profile Page</Link></li>
        <li><Link to="/login">Login User</Link></li>
        <li><Link to="/">Go Home</Link></li>
      </ul>
      <Switch>
        <Route path="/explore" component={Explore} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );


};

// these commented out functions makes it so that the nav bar items are on every page

// function MovementList() {
//   return (
//     <div>
//       <h2>MovementList</h2>
//     </div>
//   );
// }

// function Profile() {
//   return (
//     <div>
//       <h2>Profile</h2>
//     </div>
//   );
// }

// function Explore() {
//   return (
//     <div>
//       <h2>Explore</h2>
//     </div>
//   );
// }

// function Login() {
//   return (
//     <div>
//       <h2>Login</h2>
//     </div>
//   );
// }

{/* <Router>
<strong>OrganizePower</strong>
<div>
  <nav>
    <ul>
      <li>
        <Link to="/MovementList">MovementList </Link>
      </li>
      <li>
        <Link to="/Profile">Profile </Link>
      </li>
      <li>
        <Link to="/Explore">Explore </Link>
      </li>
      <li>
        <Link to="/Login">Login/signUp </Link>
      </li>
    </ul>
  </nav>

  {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
//   <Switch>
//     <Route path="/MovementList">
//       <MovementList />
//     </Route>
//     <Route path="/profile">
//       <Profile />
//     </Route>
//     <Route path="/Explore">
//       <Explore />
//     </Route>
//     <Route path="/login/signup">
//       <Login />
//     </Route>
//   </Switch>
// </div>
// </Router> */}

export default Navbar;
