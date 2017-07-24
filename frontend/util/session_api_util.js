import {receiveCurrentUser,receiveErrors} from '../actions/session_actions';

export const signin = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user
  })
);

export const signout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
