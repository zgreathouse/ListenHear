import merge from 'lodash/merge';

import { RECEIVE_SONG, RECEIVE_SONGS, REMOVE_SONG } from '../actions/song_actions';

const defaultState = () => ({
  songs: {},
  currentSong: null,
})

const SongReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SONG:
      const song = action.song;
      return merge({}, state, {
        songs: { [song.id]: song },
        currentsong: song.id
      });

    case RECEIVE_SONGS:
      return merge({}, state, { songs: action.song });

    case REMOVE_SONG:
      newState = Object.assign({}, state);
      delete newState.songs[action.id];
      return newState;

    default:
      return state;
  }
};

export default SongReducer;
