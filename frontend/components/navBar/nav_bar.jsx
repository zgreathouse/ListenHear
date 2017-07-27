import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UploadModal from '../modals/upload_modal';

const NavBar = ({currentUser, signout}) => (
  <header className="nav">
    <nav className="nav-bar">

      <hgroup className="header-group-1">
        <h2 className="nav-logo" >ListenHear</h2>
      </hgroup>

      <hgroup className="header-group-2">
        <div className="username-link-flex">
          <Link to="/home" className="nav-home-link">Home</Link>
        </div>
        <UploadModal className="update-button"/>
        <div className="nav-profile-image-box">
          <img className="nav-profile-image" height="40" width="40" src={currentUser.image_url}/>
        </div>
        <div className="username-link">
          <Link to={`/users/${currentUser.id}`}>{currentUser.username}</Link>
        </div>
        <button className="signout-button" onClick={signout}>Sign Out</button>
    	</hgroup>

    </nav>
</header>
);

export default NavBar;
