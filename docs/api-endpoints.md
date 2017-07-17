# API Endpoints

## HTML API

### Root

- `GET /`

## JSON API

### Users

- `POST /api/users` :create user
- `PATCH /api/users` :edit user info

### Session

- `POST /api/session` :Sign In
- `DELETE /api/session` :Sign Out

### Uploads

- `GET /api/songs` :song index
- `POST /api/songs` :upload song
- `GET /api/songs/:id` :song show
- `PATCH /api/songs/:id` :modify upload
- `DELETE /api/songs/:id` :delete upload

### Comments

- `GET /api/comments` :show comment
- `POST /api/comments` :comment on a song
- `DELETE /api/comment/:id` :remove a comment
