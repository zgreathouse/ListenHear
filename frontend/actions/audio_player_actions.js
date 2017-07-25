import * as APIUtil from '../util/song_api_util'

//constants
export const PLAY_AUDIO_PLAYER = 'PLAY_AUDIO_PLAYER';
export const PAUSE_AUDIO_PLAYER = 'PAUSE_AUDIO_PLAYER';
export const ASSIGN_CURRENT_SONG = 'ASSIGN_CURRENT_SONG';

//sync actions
export const playAudioPlayer = () => ({
  type: PLAY_AUDIO_PLAYER
});

export const pauseAudioPlayer = () => ({
  type: PAUSE_AUDIO_PLAYER
});

export const assignCurrentSong = (id) => ({
  type: ASSIGN_CURRENT_SONG,
  id
});
