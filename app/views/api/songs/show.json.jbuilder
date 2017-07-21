json.set! @song.id do
  json.partial! "api/songs/song", track: @song
end
