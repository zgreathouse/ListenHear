import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="signin-signup">
    <Link to="/signin">Sign in</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, signout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={signout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, signout }) => (
  currentUser ? personalGreeting(currentUser, signout) : sessionLinks()
);

export default Greeting;
