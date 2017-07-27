import { connect } from 'react-redux';
import SongIndex from './songs_index';
import { fetchSongs, fetchSong } from '../../actions/song_actions';
import { selectFiveSongs } from '../../reducers/selector';
import { assignCurrentSong,
         playAudioPlayer,
         pauseAudioPlayer} from '../../actions/audio_player_actions';

const mapStateToProps = state => ({
  songs: selectFiveSongs(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchSongs: (songs) => dispatch(fetchSongs({ songs })),
  fetchSong: (id) => dispatch(fetchSong(id)),
  playAudioPlayer: () => dispatch(playAudioPlayer()),
  pauseAudioPlayer: () => dispatch(pauseAudioPlayer()),
  assignCurrentSong: (id) => dispatch(assignCurrentSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);
