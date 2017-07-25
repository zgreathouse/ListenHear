import { connect } from 'react-redux';
import SongIndexItem from './songs_index_item';
import { fetchSongs, fetchSong } from '../../actions/song_actions';
import { assignCurrentSong } from '../../actions/audio_player_actions';
import { selectAllSongs } from '../../reducers/selector';

const mapStateToProps = state => ({
  songs: selectAllSongs(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchSongs: (songs) => dispatch(fetchSongs({ songs })),
  fetchSong: (song) => dispatch(fetchSong({ song })),
  assignCurrentSong: (id) => dispatch(assignCurrentSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndexItem);
