import { connect } from 'react-redux';
import SongIndex from './songs_index';
import { fetchSongs, fetchSong } from '../../actions/song_actions';
import { selectAllSongs } from '../../reducers/selector';

const mapStateToProps = state => ({
  songs: selectAllSongs(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchSongs: (songs) => dispatch(fetchSongs({ songs })),
  fetchSong: (song) => dispatch(fetchSong({ song }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);
