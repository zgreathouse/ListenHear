import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { playAudioPlayer, pauseAudioPlayer } from '../../actions/audio_player_actions';

const mapStateToProps = ({ songs, audioPlayer }) => ({
  currentSong: audioPlayer.currentSong,
  playing: audioPlayer.playing,
  songs: songs.entities
});

const mapDispatchToProps = (dispatch) => ({
  playAudioPlayer: () => dispatch(playAudioPlayer()),
  pauseAudioPlayer: () => dispatch(pauseAudioPlayer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
