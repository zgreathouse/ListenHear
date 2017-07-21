@songs.each do |track|
  json.set! track.id do
    json.partial! "api/songs/song", track: track
  end
end
