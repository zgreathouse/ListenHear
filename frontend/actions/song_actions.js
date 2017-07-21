import * as APIUtil from '../util/song_api_util'

//constants
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const DELETE_SONG = 'DELETE_SONG';

//sync actions
export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const receiveSongs = song => ({
  type: RECEIVE_SONGS,
  song
});

//async actions
export const fetchSong = song => dispatch => (
  APIUtil.fetchSong(song).then(song => (
    dispatch(receiveSong(song))
  ))
);

export const fetchSongs = user => dispatch => (
  APIUtil.fetchSongs(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ))
);

export const createSong = (song) => dispatch => (
  APIUtil.createSong(song).then(song => (
    dispatch(receiveSong(song))
  ))
);

export const deleteSong = () => dispatch => (
  APIUtil.deleteSong().then(user => (
    dispatch(receiveSong(null))
  ))
);
