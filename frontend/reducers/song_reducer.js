import merge from 'lodash/merge';

import { RECEIVE_SONG, RECEIVE_SONGS, REMOVE_SONG } from '../actions/song_actions';

const initialState = () => ({
  entities: {}
})

const SongReducer = (state = initialState(), action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SONG:
      const song = action.song;
      return merge({}, state, {
        entities: { [song.id]: song }
      });

    case RECEIVE_SONGS:
      return merge({}, state, { entities: action.songs });

    case REMOVE_SONG:
      newState = Object.assign({}, state);
      delete newState.entities[action.id];
      return newState;

    default:
      return state;
  }
};

export default SongReducer;
