import { connect } from 'react-redux';
import { allCommentsBySong } from '../../reducers/selector';
import { createComment,
         deleteComment,
         requestCommentsBySong,
         clearComments,
         clearCommentErrors } from '../../actions/comment_actions';
import CommentsIndex from './comments_index';


const mapStateToProps = (state, ownProps) => ({
    comments: allCommentsBySong(state),
    errors: state.comments.errors,
    songId: ownProps.songId
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment({ comment } )),
  deleteComment: id => dispatch(deleteComment(id)),
  requestCommentsBySong: id => dispatch(requestCommentsBySong(id)),
  clearCommentErrors: () => dispatch(clearCommentErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex);
