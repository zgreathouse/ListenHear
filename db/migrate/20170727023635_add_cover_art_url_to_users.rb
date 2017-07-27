class AddCoverArtUrlToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :cover_art_url, :string
  end
end
