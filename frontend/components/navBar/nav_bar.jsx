import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthModal from '../modals/auth_modal';


const NavBar = ({currentUser, signout}) => (
  <nav className="nav-bar">
    <hgroup className="header-group-1">
      <h2 className="nav-logo" >ListenHere</h2>
    </hgroup>
    <hgroup className="header-group-2">
      <button className="update-button">Upload</button>
      <button className="username">{currentUser.username}</button>
      <button className="signout-button" onClick={signout}>Sign Out</button>
  	</hgroup>
  </nav>
);

export default NavBar;
