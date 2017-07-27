import * as APIUtil from '../util/song_api_util'

//constants
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const REMOVE_SONG = 'REMOVE_SONG';
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

//sync actions
export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const removeSong = id => ({
  type: REMOVE_SONG,
  id
});

export const receiveSongErrors = (errors) => ({
  type: RECEIVE_SONG_ERRORS,
  errors
});

export const clearErrors = (errors) => ({
  type: CLEAR_ERRORS
});

//async actions
export const fetchSong = id => dispatch => (
  APIUtil.fetchSong(id).then(song => (
    dispatch(receiveSong(song))
  ))
);

export const fetchSongs = () => dispatch => (
  APIUtil.fetchSongs().then(songs => (
    dispatch(receiveSongs(songs))
  ))
);

export const createSong = (song) => dispatch => (
  APIUtil.createSong(song).then(song => (
    dispatch(receiveSong(song))
  ))
);

export const deleteSong = id => dispatch => (
  APIUtil.deleteSong(id).then(song => (
    dispatch(removeSong(song))
  ))
);

export const updateSong = (id, song) => dispatch => {
  return APIUtil.updateSong(id, song).then(song =>
    dispatch(receiveSong(song)),
    error => dispatch(receiveSongErrors(error.responseJSON))
  );
};
