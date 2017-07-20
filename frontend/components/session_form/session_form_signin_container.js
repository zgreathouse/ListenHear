import { connect } from 'react-redux';
import { signin, signout, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import {link, withRouter} from 'react-router-dom';


const mapStateToProps = ({ session }) => {
  return {
    signedIn: Boolean(session.currentUser),
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch) => {
  const formType = 'signin';
  const processForm = (formType === 'signin') ? signin : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
