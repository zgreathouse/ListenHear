json.extract! song, :id, :title, :genre, :description, :artist_id, :user
json.image_url song.avatar.url
json.song_url song.track.url
