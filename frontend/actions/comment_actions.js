
import * as CommentApiUtil from '../util/comment_util';

//constants
export const RECEIVE_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_SINGLE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const COMMENT_ERRORS = 'COMMENT_ERRORS';
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS';


//sync actions
export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const commentErrors = errors => ({
  type: COMMENT_ERRORS,
  errors
});

export const clearCommentErrors = () => ({
  type: CLEAR_COMMENT_ERRORS,
  errors: []
});

//async actions
export const createComment = comment => dispatch => {
  return CommentApiUtil.createComment(comment).then(comment =>
    dispatch(receiveComment(comment)),
    errors => dispatch(commentErrors(errors.responseJSON))
  );
};

export const deleteComment = id => dispatch => (
  CommentApiUtil.deleteComment(id).then((comment) => (
    dispatch(removeComment(comment))
  ))
);

export const requestCommentsBySong = songId => dispatch => (
  CommentApiUtil.fetchAllCommentsBySong(songId).then((comments) => (
    dispatch(receiveComments(comments))
  ))
);
