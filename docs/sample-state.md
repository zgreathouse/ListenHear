```js

const state = {
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
