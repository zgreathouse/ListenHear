import merge from 'lodash/merge';

import { RECEIVE_SONG,
         RECEIVE_SONGS,
         REMOVE_SONG,
         RECEIVE_SONG_ERRORS,
         CLEAR_ERRORS } from '../actions/song_actions';

const initialState = () => ({
  entities: {},
  errors: []
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

    case RECEIVE_SONG_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });

    case CLEAR_ERRORS:
      const newErrors = [];
      return merge({}, state, { newErrors });

    default:
      return state;
  }
};

export default SongReducer;
