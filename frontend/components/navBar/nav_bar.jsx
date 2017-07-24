import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UploadModal from '../modals/upload_modal';


const NavBar = ({currentUser, signout}) => (
  <header className="nav">
    <nav className="nav-bar">
      <hgroup className="header-group-1">
        <h2 className="nav-logo" >ListenHere</h2>
      </hgroup>
      <hgroup className="header-group-2">
        <UploadModal className="update-button"/>
        <button className="username">{currentUser.username}</button>
        <button className="signout-button" onClick={signout}>Sign Out</button>
    	</hgroup>
    </nav>
</header>
);

export default NavBar;
