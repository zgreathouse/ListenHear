export const fetchSong = (id) => (
  $.ajax({
    method: "GET",
    url: `api/songs/${id}`
  })
);

export const fetchSongs = () => (
  $.ajax({
    method: "GET",
    url: "api/songs"
  })
);

export const createSong = (song) => (
  $.ajax({
    method: "POST",
    url: "api/songs",
    data: { song }
  })
);

export const deleteSong = (song) => (
  $.ajax({
    method: "DELETE",
    url: `api/songs/${song.id}`,
  })
);
