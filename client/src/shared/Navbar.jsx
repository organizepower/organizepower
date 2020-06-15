import React, { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

// import MovementList from './MovementList';
import Profile from '../profile/Profile.jsx';
import Explore from '../explore/Explore.jsx';
import Login from '../login/Login.jsx';
import Movement from '../movement/Movement.jsx'

const Navbar = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/explore">Explore Page</Link></li>
          <li><Link to="/profile">Profile Page</Link></li>
          <li><Link to="/login">Login User</Link></li>
          <li><Link to="/">Go Home</Link></li>
        </ul>
        <Switch>
          <Route exact path="/explore" render={() => (<Explore />)} />
          <Route exact path="/profile" render={() => (<Profile />)} />
          <Route exact path="/login" render={() => (<Login />)} />
          <Route exact path="/movement" render={() => (<Movement />)} />
        </Switch>
      </div>
    </Router>
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
