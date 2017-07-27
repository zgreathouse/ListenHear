import { connect } from 'react-redux';
import SongDetail from './song_detail';
import { fetchSongs, fetchSong, deleteSong } from '../../actions/song_actions';
import { selectAllSongs } from '../../reducers/selector';
import { assignCurrentSong,
         playAudioPlayer,
         pauseAudioPlayer} from '../../actions/audio_player_actions';

const mapStateToProps = (state, { match }) => ({
  song: state.songs.entities[match.params.songId],
  playing: state.audioPlayer.playing,
  currentSong: state.audioPlayer.currentSong,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  fetchSong: (id) => dispatch(fetchSong(id)),
  deleteSong: (id) => dispatch(deleteSong(id)),
  assignCurrentSong: (id) => dispatch(assignCurrentSong(id)),
  playAudioPlayer: () => dispatch(playAudioPlayer()),
  pauseAudioPlayer: () => dispatch(pauseAudioPlayer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongDetail);
