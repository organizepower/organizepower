import React, { useState } from 'react';
import MovementList from './MovementList.jsx';

const Navbar = () => {
  return (
    <div>
      <ul id="nav">
        <div><a href="MovementList.jsx">Start A Movement</a></div>
        <div><a href="Profile.jsx">My Profile</a></div>
        <div><a href="Explore.jsx">Explore</a></div>
        <div><a href="Login.jsx">Login/signup</a></div>
      </ul>
    </div>
  );

  // need some css to make it horizontal
//   #nav {
//     width: 100%;
//     float: left;
//     margin: 0 0 3em 0;
//     padding: 0;
//     list-style: none; }
// #nav li {
//     float: left; }
};

export default Navbar;
