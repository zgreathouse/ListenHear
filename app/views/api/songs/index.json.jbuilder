@song.each do |track|
  json.set! track.id do
    json.partial! "api/songs/song", song: @song
    json.image_url asset_path(track.image_url)
  end
end
