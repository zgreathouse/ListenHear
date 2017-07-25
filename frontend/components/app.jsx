import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// '/'
import SplashPageContainer from './splash_page/splash_page_container';
import RootPageIndex from './root_page_index/root_page_index_container';
// '/home'
import NavBarContainer from './navBar/nav_bar_container';
import SongIndexContainer from './songs/songs_index_container';




const App = () => (
  <div>
      <switch>
        <AuthRoute exact path='/' component={SplashPageContainer} />
        <AuthRoute exact path='/' component={RootPageIndex} />
        <ProtectedRoute exact path='/home' component={NavBarContainer} />
        <ProtectedRoute exact path='/home' component={SongIndexContainer} />

      </switch>
  </div>
);

export default App;
