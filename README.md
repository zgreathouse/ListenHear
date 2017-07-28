# ListenHear

[ListenHear](https://listenhere-zgreathouse.herokuapp.com/#/) is a full stack web application built on a React/Redux frontend architecture and a Ruby on Rails backend framework. A faithful clone to soundcloud.com. This sight allows you to upload, listen to, and delete music of your own, customizable user pages comment on other user’s uploads, and finally features continuous play so you may do all of the above seamlessly as you explore the site.

## Features

- Front-end and back-end authentication
- Upload, listen to, and delete songs
- Audio Player with continuous play
- Customizable user pages, including profile and cover photos
- Comment on other user's uploads
- User pages

## Programming Languages
- JavaScript (version ES6)
- Ruby

### Technologies
- Ruby on Rails (version 5.0.4)
- React.js
- Redux
- PostgreSQL
- AWS
- jQuery
- jBuilder
- SASS

### Authentication

User's passwords are stored in the database as a salted hash using BCrypt. Salting a password prepends a random string the password so even users with duplicate passwords will not have the same hash stored in the backend.

![login_flow](/app/assets/images/SignIn.gif)


### Song CRUD

Upload your own songs for others to hear, or delete them as needed. Also features song show pages.

![song_show](/app/assets/images/songshow.gif)

### Continuous Play

Music continues to play as you navigate the site from page to page.

### Song Comments

Users can comment on each other's uploads.

![comment](/app/assets/images/comments.gif)

### User Pages

View other users profiles, upload a profile picture and cover art for other users to see.

![userPages](/app/assets/images/userPages.gif)

## In the making...

#### Likes

I intend to allow for users to like each other's uploads, to give the
app a more modern feel

#### Search

Another planned addition to the site is a search bar to allow for navigation

#### Follows

I would like to implement a following features to allow users to follow others to stay up to date with their favorite artists
