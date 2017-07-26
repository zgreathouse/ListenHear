class Song < ApplicationRecord
  validates :title, :artist_id, presence: true

  belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :artist_id

  has_many :comments

  has_attached_file :avatar,  presence: true, url: ':s3_domain_url', path: '/:class/:attachment/:id_partition/:style/:filename', bucket: 'zach-listenhear-dev'
	validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
  validates_with AttachmentSizeValidator, attributes: :avatar, less_than: 3.megabytes

  has_attached_file :track, presence: true, url: ':s3_domain_url', path: '/:class/:attachment/:id_partition/:style/:filename', bucket: 'zach-listenhear-dev'
  validates_attachment_content_type :track, content_type: /\Aaudio\/.*\z/
  validates_with AttachmentSizeValidator, attributes: :track, less_than: 40.megabytes

  
end

# for default images:
#   style: { medium: "300x300>", thumb: "100x100>"}, default_url: "default_avatar.jpg"
