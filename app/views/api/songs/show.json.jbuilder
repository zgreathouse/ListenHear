json.set! @song.id do
  json.partial! "api/songs/song", track: @song
  json.image_url asset_path(@song.image_url)
end
