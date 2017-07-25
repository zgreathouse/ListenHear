class Comment < ApplicationRecord
  validates :body, :user, :song, presence: true

  belongs_to :user
  belongs_to :song
end
