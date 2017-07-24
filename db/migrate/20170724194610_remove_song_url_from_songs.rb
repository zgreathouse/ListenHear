class RemoveSongUrlFromSongs < ActiveRecord::Migration[5.0]
  def change
    remove_column :songs, :song_url, :string
  end
end
