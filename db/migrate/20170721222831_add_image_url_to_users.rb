class AddImageUrlToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :image_url, :string
  end
end
