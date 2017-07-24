import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';
import { selectAllSongs } from './reducers/selector'

document.addEventListener('DOMContentLoaded', () => {
  let store;


  // const store2 = configureStore();
  // window.getState = store2.getState;
  // window.dispatch = store2.dispatch;
  window.selectAllSongs = selectAllSongs;


  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
