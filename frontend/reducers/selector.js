import values from 'lodash/values';

export const selectAllSongs = state => values(state.songs.entities);

export const allCommentsBySong = (state) => {
  const commentArray = values(state.comments.comments);
  return commentArray.reverse();
};

export const selectFiveSongs = (state) => {
  const allSongs = selectAllSongs(state);
  let fiveSongs = [];
  let song;

  if (allSongs.length > 5) {
    let i = 0;
    while (fiveSongs.length < 5) {
      let song = allSongs[i];
      fiveSongs.push(song);
      i++;
    }
  } else {
    fiveSongs = selectAllSongs(state);
  }

  return fiveSongs;
};

export const allSongsByUser = ({ users }) => {
  if (users.songs) {
    const selectedSongs = [];
    return values(users.songs).filter( (song) => {
      return song.artist_id === users.user.id;
    });
  } else {
    return [];
  }
};
