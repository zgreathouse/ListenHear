import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';




import { receiveSong, receiveSongs } from './actions/song_actions';
import { fetchSong, fetchSongs, createSong, deleteSong } from './util/song_api_util';

window.fetchSong    = fetchSong;
window.fetchSongs   = fetchSongs;
window.receiveSong  = receiveSong;
window.receiveSongs = receiveSongs;
window.createSong   = createSong;
window.deleteSong   = deleteSong;




document.addEventListener('DOMContentLoaded', () => {
  let store;


  const store2 = configureStore();
  window.getState = store2.getState;
  window.dispatch = store2.dispatch;


  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
