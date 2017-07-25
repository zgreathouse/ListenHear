json.extract! track, :id, :title, :genre, :description, :artist_id
json.image_url track.avatar.url
json.song_url track.track.url
