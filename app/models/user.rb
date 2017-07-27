class User < ApplicationRecord
	attr_reader :password

	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true

	has_attached_file :avatar, default_url: "http://images.all-free-download.com/images/graphiclarge/gorgeous_classical_music_background_04_vector_157885.jpg"
	validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

	has_attached_file :cover_art, default_url: "http://images.all-free-download.com/images/graphiclarge/gorgeous_classical_music_background_04_vector_157885.jpg"
	validates_attachment_content_type :cover_art, content_type: /\Aimage\/.*\z/


	after_initialize :ensure_session_token
	# before_validation :ensure_session_token_uniqueness

	has_many :songs,
		class_name: "Song",
		primary_key: :id,
		foreign_key: :artist_id

	has_many :comments

	def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials username, password
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is? password
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		# ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	# def ensure_session_token_uniqueness
	# 	while User.find_by(session_token: self.session_token)
	# 		self.session_token = new_session_token
	# 	end
	# end
end
