json.extract! track, :title, :genre, :song_url, :image_url, :artist_id
json.image_url asset_path(track.image_url)
