import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import SongReducer from './song_reducer';
import AudioPlayerReducer from './audio_player_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  songs: SongReducer,
  audioPlayer: AudioPlayerReducer
});

export default RootReducer;
