import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import SongReducer from './song_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  songs: SongReducer
});

export default RootReducer;
