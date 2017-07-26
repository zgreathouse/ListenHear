import { connect } from 'react-redux';
import { allCommentsBySong } from '../../reducers/selector';
import { createComment,
         deleteComment,
         requestCommentsBySong,
         clearComments,
         clearCommentErrors } from '../../actions/comment_actions';
import CommentsIndex from './comments_index';
import { withRouter } from 'react-router';

const mapStateToProps = (state, props) => ({
    comments: allCommentsBySong(state),
    errors: state.comments.errors,
    song: state.songs.song,
    songId: props.songId
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment({ comment } )),
  deleteComment: id => dispatch(deleteComment(id)),
  requestCommentsBySong: id => dispatch(requestCommentsBySong(id)),
  clearCommentErrors: () => dispatch(clearCommentErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex));
