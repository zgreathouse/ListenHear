import { connect } from 'react-redux';
import RootPageIndex from './root_page_index';
import { fetchSongs, fetchSong } from '../../actions/song_actions';
import { selectAllSongs } from '../../reducers/selector';

const mapStateToProps = state => ({
  songs: selectAllSongs(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchSongs: (songs) => dispatch(fetchSongs({ songs })),
  fetchSong: (id) => dispatch(fetchSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootPageIndex);
