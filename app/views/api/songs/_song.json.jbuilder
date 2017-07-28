json.extract! song, :id, :title, :genre, :description, :artist_id
json.user do
  json.id song.user.id
  json.username song.user.username
  json.image_url song.user.avatar.url
  json.cover_art_url song.user.cover_art.url
end
json.image_url song.avatar.url
json.song_url song.track.url
