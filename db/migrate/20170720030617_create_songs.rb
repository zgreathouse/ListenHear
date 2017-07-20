class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :genre, null: false
      t.integer :artist_id, null: false
      t.string :song_url, null: false
      t.string :image_url
      t.timestamps
    end
  end
end
