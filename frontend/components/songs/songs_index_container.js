import { connect } from 'react-redux';
import SongIndex from './songs_index';
import { fetchSongs, fetchSong } from '../../actions/song_actions';
import { assignCurrentSong } from '../../actions/audio_player_actions';
import { selectAllSongs } from '../../reducers/selector';

const mapStateToProps = state => ({
  songs: selectAllSongs(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchSongs: (songs) => dispatch(fetchSongs({ songs })),
  fetchSong: (id) => dispatch(fetchSong(id)),
  assignCurrentSong: (id) => dispatch(assignCurrentSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);
