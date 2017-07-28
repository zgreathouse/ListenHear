# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Song.destroy_all


#users
guest = User.create!(username: "guest", password: "password1")

nujabes = User.create!(username: "Nujabes",
  password: "1password1",
  avatar: open("https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Profile+Pictures/download.jpeg"),
  cover_art: open("https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Cover+Art/maxresdefault+(2).jpg"))

darude = User.create!(username: "Darude",
  password: "1password1",
  avatar: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Profile+Pictures/photo.jpg",
  cover_art: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Cover+Art/dubai-desert-united-arab-emirates-jeeps-WINTERDESERT1201.jpg")

deathcCabForCutie = User.create!(username: "Death Cab For Cutie",
  password: "1password1",
  avatar: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Profile+Pictures/images.jpeg",
  cover_art: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Cover+Art/carousel-kintsugi1.jpg")

sigorRos = User.create!(username:"Sigur Rós",
  password: "1password1",
  avatar: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Profile+Pictures/sigur-ros-electric-light-posed-2017-embed.jpg",
  cover_art: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Cover+Art/maxresdefault+(4).jpg")

#songs
Song.create!(title: "Another Reflection",
  genre: "Triphop",
  track: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Songs/01+-+Reflection+Eternal.mp3",
  avatar: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Song+Art/220px-ModalMusic.jpg",
  artist_id: nujabes.id)
#
# Song.create!(title: "Saeglópur",
#   genre: "Post Rock",
#   track: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Songs/06+S%C3%A6glo%CC%81pur.mp3",
#   avatar: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Song+Art/Takk.jpg",
#   artist_id: sigorRos.id)

Song.create!(title: "New Year",
  genre: "Indie Rock",
  track: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Songs/01+The+New+Year.mp3",
  avatar: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Song+Art/220px-Transatlanticism.jpg",
  artist_id: deathcCabForCutie.id)

Song.create!(title: "Just Forget",
  genre: "Triphop",
  track: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Songs/34+-+Just+forget+by+FORCE+OF+NATURENujabesFat+Jon.mp3",
  avatar: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Song+Art/Samurai-champloo-music-record-impression.gif",
  artist_id: nujabes.id)

Song.create!(title: "Sandstorm",
  genre: "Techno",
  track: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Songs/Darude-Sandstorm.mp3",
  avatar: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Song+Art/darude-sandstorm.jpg",
  artist_id: darude.id)

Song.create!(title: "Peaceland",
  genre: "Triphop",
  track: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Songs/37+-+Peaceland.mp3",
  avatar: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Song+Art/Various_Artists_The_Best_Of_Nujabes_Mix-front-large.jpg",
  artist_id: nujabes.id)

Song.create!(title: "Battle Cry",
  genre: "Triphop",
  track: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Songs/48+-+Battlecry+ft+Shing02.mp3",
  avatar: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Song+Art/samurai.jpg",
  artist_id: nujabes.id)

Song.create!(title: "Your Heart is an Empty Room",
  genre: "Indie Rock",
  track: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Songs/06+Your+Heart+Is+An+Empty+Room.mp3",
  avatar: "https://s3-us-west-1.amazonaws.com/zach-listenhear-dev/seeds/Song+Art/Death_Cab_For_Cutie_-_Plans.png",
  artist_id: deathcCabForCutie.id)
