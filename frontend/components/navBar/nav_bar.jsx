import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthModal from '../modals/auth_modal';

const demoSignIn = (signin, e) => {
  e.preventDefault();
  const demoUser = {username: 'guest', password: 'password'};
  signin({user: demoUser});
}

const signedOutNavBar = (signin) => (
  <header className="signin-signup">
    <nav className="listen-here-logo">
      <h2 className="logo">ListenHere</h2>
    </nav>
    <button className="guest" onClick={(e) => demoSignIn(signin, e)}>Guest</button>
    <nav className="signin-signup-buttons">
      &nbsp;
      <AuthModal formType="signin"/>
      &nbsp;
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

const NavBar = ({ currentUser, signout, signin }) => {
  const user = {username: "guest", password: "password"};
  return currentUser ? signedInNavBar(currentUser, signout) : signedOutNavBar(signin)
}

export default NavBar;
