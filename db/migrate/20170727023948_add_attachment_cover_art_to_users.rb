class AddAttachmentCoverArtToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :cover_art
    end
  end

  def self.down
    remove_attachment :users, :cover_art
  end
end
