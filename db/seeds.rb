# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Song.destroy_all

user1 = User.create(username: "coolguy1", password: "password")
user2 = User.create(username: "coolguy2", password: "password")

Song.create!(title: "2345", genre: "metall", song_url: "sickurlbrod", image_url: "sickselfiebro", artist_id: user1.id)
Song.create!(title: "lala", genre: "funfun", song_url: "uaysdououiy", image_url: "auieyfbouyera", artist_id: user1.id)
Song.create!(title: "lawd", genre: "techno", song_url: "u1234duouiy", image_url: "auiecbyeoesss", artist_id: user1.id)
Song.create!(title: "jpna", genre: "gabbaa", song_url: "uaysdpoiuiy", image_url: "zxprisrlmuraf", artist_id: user1.id)
