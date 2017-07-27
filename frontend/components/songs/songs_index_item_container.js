import { connect } from 'react-redux';
import SongIndexItem from './songs_index_item';
import { fetchSongs, fetchSong } from '../../actions/song_actions';
import { assignCurrentSong, playAudioPlayer, pauseAudioPlayer } from '../../actions/audio_player_actions';
import { selectAllSongs } from '../../reducers/selector';

const mapStateToProps = (state, { song }) => ({
  songs: selectAllSongs(state),
  playing: state.audioPlayer.playing,
  currentSong: state.audioPlayer.currentSong,
  song
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
)(SongIndexItem);
