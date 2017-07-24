
import { connect } from 'react-redux';
import UploadForm from './upload_form';

import { createSong, updateSong } from '../../actions/song_actions';


const mapStateToProps = (state, ownProps) => ({
  id: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createSong: song => dispatch(createSong(song)),
  updateSong: (id, song) => dispatch(updateSong(id, song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
