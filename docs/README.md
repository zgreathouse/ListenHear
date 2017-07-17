========================================================================

Minimum Viable Product
A faithful clone to soundcloud.com. This sight allows you to upload,
listen to, edit, and delete music of your own, search, like, and comment
on other user’s uploads, follow other users, comment on uploads, and
finally features continuous play so you may do all of the above
seamlessly as you explore the site.

* Hosting on Heroku
* New account creation, login, and guest/demo login
* Song CRUD
* Playing songs with progress bar with continuous play
* User pages
* Comments
* Likes
* Followers


========================================================================

Schema

Users
* Id                      integer            not null, primary key
* username                string             not null, unique
* password_digest         string             not null,
* session_token           string             not null, unique
* profile_picture_url     string

Follows (join table between users)
* Id                      integer            not null, primary key
* follower_id             integer            not null, foreign key
* followed_user_id        integer            not null, foreign key

Songs
* Id                      integer            not null, primary key
* song_url                string             not null, unique
* title                   string             not null
* Artist                  string             not null, unique
* genre                   string             not null
* user_id                 integer            not null, foreign key
* Image_url               string
* likes                   integer            
* time_of_upload          string             not null

Comments
* Id                      integer            not null, primary key
* song_id                 integer            not null, foreign key
* user_id                 integer            not null, foreign key
* body                    text               not null
* comment_time            string             not null

Likes (join table between users and songs)
* Id                      integer            not null, primary key
* user_id                 integer            not null, foreign key
* song_id                 integer            not null, foreign key


========================================================================

End Points

Path							Component
"/"							Stream
"/stream"						LoggedInHomePage > StreamContainer
"/users/:id"					UserShowPage > AllContainer
"/users/:id/songs"				UserShowPage > SongsContainer
"/users/:userId/songs/:songId"	SongShowPage > SongPlayerWidget(:id)
"search"						Search
"/upload"						UploadContainer


========================================================================

Sample State

Const state = {
	session: {
		currentUser: {
			id: 4,
			username: “PhoenixD”
			profile_picture_url: “image_url…”
		}
	},
	NowPlaying: {
		song: {
			id: 9,
			title: “Mistaken for Strangers”,
			artist: “The National”,
			genre: “Indie Rock”,
			song_url: “song_url…”,
			image_url: “image_url…”,
			likes: 890000
			comments: {
				id: 34,
				user_id: 41,
				body: “Such a great song!”
				comment_time: “dateOfComment”
				},
				{
				id: 35,
				user_id: 3,
				body: “This one’s a favorite :)!”
				comment_time: “dateOfComment”
			}//comments
		}//song
	}//nowPlaying
}//state		


========================================================================

Component Hierarchy


Home Page
*  Auth form
* Listen Here Graphic

Home Page (Signed In)
* Main page Stream
    * SongPlayer widgets
* SearchBar
* SideBar
* Header (logout, upload, search bar…etc)
* Audio Player footer

Search
* Populates a stream of songs related search by song name and artist
    * songplayer containers

User Show Page
* stream of songs by the user
* Sidebar (number of followers, number of users followed, )

Song Show Page
*  Add comment
* Read comments

Song Player container
* Contains a play button (feature for continuous play)
* Displays image, song title, artist, number of likes, number of plays

Upload Container
*   Upload Form


========================================================================

Implementation Timeline

Day 1 - 2
  Set up/style Auth and Home Page

Day 4 - 7
  Set up/ style Home page (signed in)
  set up liking and commenting on uploads feature
  set up follow users feature

Day 8 - 10
  Set up/ style User profile
  upload songs feature
  follow users

Day 11 - 14
  continuous play feature
  finalize styling
