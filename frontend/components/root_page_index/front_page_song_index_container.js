import { connect } from 'react-redux';
import FrontPageSongIndex from './front_page_song_index';
import { fetchSongs, fetchSong } from '../../actions/song_actions';
import { assignCurrentSong, playAudioPlayer, pauseAudioPlayer } from '../../actions/audio_player_actions';
import { selectFiveSongs } from '../../reducers/selector';

const mapStateToProps = (state) => ({
  songs: selectFiveSongs(state),
  playing: state.audioPlayer.playing,
  currentSong: state.audioPlayer.currentSong,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSongs: (songs) => dispatch(fetchSongs({ songs })),
  fetchSong: (id) => dispatch(fetchSong(id)),
  assignCurrentSong: (id) => dispatch(assignCurrentSong(id)),
  playAudioPlayer: () => dispatch(playAudioPlayer()),
  pauseAudioPlayer: () => dispatch(pauseAudioPlayer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontPageSongIndex);
