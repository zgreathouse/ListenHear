import { connect } from 'react-redux';
import { signout, signin } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signout: (e) => {
    e.preventDefault();
    return dispatch(signout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
