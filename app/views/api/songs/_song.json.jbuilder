json.extract! track, :id, :title, :genre, :description, :artist_id, :user
json.image_url track.avatar.url
json.song_url track.track.url
