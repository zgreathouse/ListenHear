import { connect } from 'react-redux';
import { requestUser, requestSongsByUser, updateUser } from '../../actions/user_actions';
import { requestSingleSong, receiveSong } from '../../actions/song_actions';
import { allSongsByUser } from '../../reducers/selector';
import UserSplashPage from './user_splash_page';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.users.user,
  songs: allSongsByUser(state)
});

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id)),
  requestSongsByUser: id => dispatch(requestSongsByUser(id)),
  receiveSong: song => dispatch(receiveSong(song)),
  updateUser: (id, user) => dispatch(updateUser(id, user))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSplashPage);
