class Song < ApplicationRecord
  # TODO mode-level validations
  validates :title, :genre, :artist_id, :song_url, :image_url, presence: true

  belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :artist_id

end
