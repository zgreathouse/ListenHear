import * as APIUtil from '../util/user_api_util';

//constants
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_USER_SONGS = 'RECEIVE_USER_SONGS';
export const CLEAR_USER_SONGS = 'CLEAR_USER_SONGS';

//sync actions
export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const userErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const receiveUserSongs = songs => ({
  type: RECEIVE_USER_SONGS,
  songs
});


//async actions
export const requestUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  ))
);

export const updateUser = (id, user) => dispatch => {
  return APIUtil.updateUser(id, user).then(user => {
    debugger
    return dispatch(receiveUser(user))
  },
    errors => dispatch(userErrors(errors.responseJSON))
  );
};

export const requestSongsByUser = id => dispatch => (
  APIUtil.fetchAllSongsByUser(id).then(songs => (
    dispatch(receiveUserSongs(songs))
  ))
);
