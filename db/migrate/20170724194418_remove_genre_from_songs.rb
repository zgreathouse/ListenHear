class RemoveGenreFromSongs < ActiveRecord::Migration[5.0]
  def change
    remove_column :songs, :genre, :string
  end
end
