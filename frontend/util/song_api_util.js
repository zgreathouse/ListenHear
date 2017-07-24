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

export const createSong = (song) => {
  return (
    $.ajax({
      method: "POST",
      url: "api/songs",
      data: song,
      processData: false,
      contentType: false
    })
  );
}

export const deleteSong = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/songs/${id}`,
  })
);
