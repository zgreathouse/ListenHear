class AddSongUrlToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :song_url, :string
  end
end
