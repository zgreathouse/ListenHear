class AddGenreToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :genre, :string
  end
end
