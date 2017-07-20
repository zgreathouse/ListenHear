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
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SplashPageContainer from './splash_page/splash_page_container';
import NavBarContainer from './navBar/nav_bar_container';


const App = () => (
  <div>
      <switch>
        <AuthRoute exact path='/' component={SplashPageContainer} />
        <ProtectedRoute exact path='/home' component={NavBarContainer} />
      </switch>
  </div>
);

export default App;
