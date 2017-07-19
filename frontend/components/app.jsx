import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import AuthModal from './modals/auth_modal';
import SessionFormSignInContainer from './session_form/session_form_signin_container';
import SessionFormSignUpContainer from './session_form/session_form_signup_container';
import NavBarContainer from './navBar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
  </div>
);

export default App;
