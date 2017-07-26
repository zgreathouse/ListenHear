import values from 'lodash/values';

export const selectAllSongs = state => values(state.songs.entities);

export const allCommentsBySong = (state) => {
  const commentArray = values(state.comments.comments);
  return commentArray.reverse();
};
