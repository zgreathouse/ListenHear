import { RECEIVE_COMMENT,
         RECEIVE_COMMENTS,
         REMOVE_COMMENT,
         COMMENT_ERRORS,
         CLEAR_COMMENT_ERRORS
       } from '../actions/comment_actions';

const _initialState = {
  comments: {},
  errors: []
};

const CommentReducer = (state = _initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return Object.assign(newState, {comments: action.comments});
    case RECEIVE_COMMENT:
      newState.comments[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      delete newState.comments[action.comment.id];
      return newState;
    case COMMENT_ERRORS:
      return Object.assign(newState, {errors: action.errors});
    case CLEAR_COMMENT_ERRORS:
      return Object.assign(newState, {errors: action.errors});
    default:
      return state;
  }
};

export default CommentReducer;
