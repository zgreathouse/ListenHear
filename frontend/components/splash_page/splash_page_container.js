import { connect } from 'react-redux';
import { signout, signin } from '../../actions/session_actions';
import splashPage from './splash_page';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signin: ({user}) => dispatch(signin({user}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(splashPage);
