import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// '/'
import SplashPageContainer from './splash_page/splash_page_container';
import RootPageIndex from './root_page_index/root_page_index_container';
// '/home'
import NavBarContainer from './navBar/nav_bar_container';
import SongIndexContainer from './songs/songs_index_container';
import AudioPlayerContainer from './audio_player/audio_player_container';
// '/songs/data.song.id}'
import CommentsContainer from './comments/comments_container';
import SongDetailContainer from './songs/song_detail_container';



const App = () => (
  <div>
    <ProtectedRoute path='/' component={NavBarContainer} />
    <Switch>
      <ProtectedRoute path='/songs/:songId' component={SongDetailContainer} />
      <ProtectedRoute path='/home' component={SongIndexContainer} />
      <AuthRoute path='/' component={SplashPageContainer} />
      {/* <AuthRoute path='/' component={RootPageIndex} /> */}
    </Switch>
    <ProtectedRoute path='/' component={AudioPlayerContainer} />
  </div>
);

export default App;
