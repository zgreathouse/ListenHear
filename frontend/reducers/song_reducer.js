import merge from 'lodash/merge';

import { RECEIVE_SONG, RECEIVE_SONGS, DELETE_SONG } from '../actions/song_actions';

const defaultState = () => ({
  entities: {},
  currentSong: null,
})

const SongReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SONG:
      const song = action.payload.song;
      return merge({}, state, {
        entities: { [song.id]: song },
        currentsong: song.id
      });

    case RECEIVE_SONGS:
      return merge({}, state, { entities: action.song });

    /* TODO
    case DELETE_SONG:
    */
    
    default:
      return state;
  }
};

export default SongReducer;
