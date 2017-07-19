import React from 'react';
import { Link } from 'react-router-dom';
import AuthModal from '../modals/auth_modal';

const signedOutNavBar = () => (
  <header className="signin-signup">
    <nav className="listen-here-logo">
      <h2 className="logo">ListenHere</h2>
    </nav>

    <nav className="signin-signup-buttons">
      &nbsp;
      <AuthModal formType="signin"/>
      &nbsp;
      <AuthModal formType="signup"/>
    </nav>

    <div className="welcome-message">
      <div>
      <p className="welcome">Connect on ListenHere</p>
      <p className="message">
        Discover, stream, and share a constantly expanding mix of music <br/>
            from emerging and major artists around the world</p>
      </div>
    </div>
  </header>
);

const signedInNavBar = (currentUser, signout) => (
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

const NavBar = ({ currentUser, signout }) => (
  currentUser ? signedInNavBar(currentUser, signout) : signedOutNavBar()
);

export default NavBar;
