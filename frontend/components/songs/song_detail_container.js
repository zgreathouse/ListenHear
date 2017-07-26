import { connect } from 'react-redux';
import SongDetail from './song_detail';
import { fetchSongs, fetchSong } from '../../actions/song_actions';
import { selectAllSongs } from '../../reducers/selector';

const mapStateToProps = (state, { match }) => ({
  song: state.songs.entities[match.params.songId],
  playing: state.audioPlayer.playing,
  currentSong: state.audioPlayer.currentSong
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: (songs) => dispatch(fetchSongs({ songs })),
  fetchSong: (id) => dispatch(fetchSong(id)),
  assignCurrentSong: (id) => dispatch(assignCurrentSong(id)),
  playAudioPlayer: () => dispatch(playAudioPlayer()),
  pauseAudioPlayer: () => dispatch(pauseAudioPlayer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongDetail);
