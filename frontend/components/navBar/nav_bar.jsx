import React from 'react';
import { Link } from 'react-router-dom';
import AuthModal from '../modals/auth_modal';

const signedOutNavBar = () => (
  <header className="signin-signup">
    <nav className="listen-here-logo">
      <Link to="/">
        <button>ListenHere</button>
      </Link>
    </nav>

    <nav className="signin-signup-buttons">
      &nbsp;
      <AuthModal formType="signin"/>
      &nbsp;
      <AuthModal formType="signup"/>
    </nav>
  </header>
);

const signedInNavBar = (currentUser, signout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={signout}>Sign Out</button>
	</hgroup>
);

const NavBar = ({ currentUser, signout }) => (
  currentUser ? signedInNavBar(currentUser, signout) : signedOutNavBar()
);

export default NavBar;
// &nbsp;
// <AuthModal formType="signin"/>
// &nbsp;
// <AuthModal formType="signup"/>


// &nbsp;
// <Link to="/signin"><button>Sign In</button></Link>
// &nbsp;
// <Link to="/signup"><button>Create Account</button></Link>
