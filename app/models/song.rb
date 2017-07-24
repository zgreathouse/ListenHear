class Song < ApplicationRecord
  validates :title, :genre, :artist_id, :song_url, :image_url, presence: true

  belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :artist_id

  has_attached_file :avatar, style: { medium: "300x300>", thumb: "100x100>"}, default_url: "default_avatar.jpg"
	validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  # has_attached_file :track
	# validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

end
