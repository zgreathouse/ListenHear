json.song do
  json.partial! "api/songs/song", song: @song
  json.image_url asset_path(@song.image_url)
end
