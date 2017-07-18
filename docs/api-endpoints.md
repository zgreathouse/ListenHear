# API Endpoints

## HTML API

### Root

- `GET /` :Home Page Show

## JSON API

### Users

- `POST /api/users` :create user
- `PATCH /api/users` :edit user info

### Session

- `POST /api/session` :Sign In
- `DELETE /api/session` :Sign Out

### Songs

- `GET /api/songs` :song index
- `POST /api/songs` :upload song
- `GET /api/songs/:id` :song show
- `PATCH /api/songs/:id` :modify upload
- `DELETE /api/songs/:id` :delete upload

### Comments

- `GET /api/comments` :show comments for a song
- `POST /api/comments` :comment on a song
- `DELETE /api/comment/:id` :delete comment based on ID
