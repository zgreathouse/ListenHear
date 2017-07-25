import merge from 'lodash/merge';

import { PLAY_AUDIO_PLAYER, PAUSE_AUDIO_PLAYER, ASSIGN_CURRENT_SONG } from '../actions/audio_player_actions';

const initialState = () => ({
  playing: false,
  currentSong: null
})

const AudioPlayerReducer = (state = initialState(), action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case PLAY_AUDIO_PLAYER:
      return merge({}, state, {
        playing: true
      });

    case ASSIGN_CURRENT_SONG:
      return merge({}, state, {
        playing: true,
        currentSong: action.id
      });

    case PAUSE_AUDIO_PLAYER:
      return merge({}, state, { playing: false });

    default:
      return state;
  }
};

export default AudioPlayerReducer;
