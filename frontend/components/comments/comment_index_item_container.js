import { connect } from 'react-redux';
import { allCommentsBySong } from '../../reducers/selector';

import CommentIndexItem from './comment_index_item';


const mapStateToProps = state => ({
    comment: allCommentsBySong(state)[state.comments.comments.id],
});

// const mapDispatchToProps = dispatch => ({
//   requestCommentsBySong: id => dispatch(requestCommentsBySong(id))
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(CommentIndexItem);
