import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

// import MovementList from './MovementList';
import Profile from './Profile.jsx';
import Explore from './Explore.jsx';
import Login from './Login.jsx';
import Movement from './Movement.jsx';
import SignUp from './SignUp.jsx';
import { getUserProfileById } from '../services/services';


const Navbar = () => {
  // const { id } = currentMovement;
  const [currentMovement, setCurrentMovement] = useState({});
  const [user, setUser] = useState({});

  function handleClick(movemementId) {
    console.log(movemementId);
    axios.get(`/movement/:${movemementId}`)
      .then(res => {
        setCurrentMovement(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const setUserState = (u) => {
    setUser(u);
  };

  useEffect(() => {
    getUserProfileById(3)
      .then(res => {
        console.log(res);
        setUser(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="heroicon-ui" d="M13 16v5a1 1 0 0 1-1 1H9l-3-6a2 2 0 0 1-2-2 2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2 0-1.1.9-2 2-2h7.59l4-4H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2.41l-4-4H13zm0-2h1.41l4 4H20V4h-1.59l-4 4H13v6zm-2 0V8H6v2H4v2h2v2h5zm0 2H8.24l2 4H11v-4z" /></svg>
            <span className="font-semibold text-xl tracking-tight m-2">Organize Power</span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <NavLink to="/explore" className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
                EXPLORE
              </NavLink>
              <NavLink to={`/profile/${user.id}`} className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
                PROFILE
              </NavLink>
              <NavLink to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
                LOGIN
              </NavLink>
              <NavLink to="/signup" className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4">
                SIGNUP
              </NavLink>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path={`/movement/${currentMovement.id}`} render={() => (<Movement currentMovement={currentMovement} />)} />
          <Route exact path="/explore" render={() => (<Explore user={user} handleClick={handleClick} />)} />
          <Route exact path={`/profile/${user.id}`} render={() => (<Profile user={user} handleClick={handleClick} />)} />
          <Route exact path="/login" render={() => (<Login />)} />
          <Route exact path="/signup" render={() => (<SignUp setUserState={setUserState} />)} />
        </Switch>
        <Redirect to="/explore" />
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

{ /* <Router>
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
      renders the first one that matches the current URL. */ }
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
