export const fetchSong = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/songs/${id}`
  })
}

export const fetchSongs = () => {
  return $.ajax({
    method: "GET",
    url: "api/songs"
  })

  export const deleteSong = (song) => {
    return $.ajax({
      method: "DELETE",
      url: `api/songs/${song.id}`,
    })
