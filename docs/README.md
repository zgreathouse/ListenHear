# ListenHere

## Minimum Viable Product

A faithful clone to soundcloud.com. This sight allows you to upload,
listen to, edit, and delete music of your own, search, like, and comment
on other user’s uploads, follow other users, comment on uploads, and
finally features continuous play so you may do all of the above seamlessly
as you explore the site.

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Song CRUD
- [ ] Playing songs with progress bar with continuous play
- [ ] User pages
- [ ] Comments
- [ ] Likes
- [ ] Followers

## Design Docs
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Set up Backend skeleton and frontend Authentication (2 days)
**Objective:** Functioning rails project with frontend authentication, find songs to seed DB with

### Phase 2: Uploads (3 days)
**Objective:** Upload/ song belong to users and CRUD made possible through API

### Phase 3: Commenting and Liking Uploads (3 days)
**Objective:** Allow for users to comment and like other uploads, components included

### Phase 4: Follows (3 day)
**Objective:** Allow users to follow other users, user-profile and side bar components included

### Phase 5: SongPlayer (3 day)
**Objective:** Create SongPlayer widget and allow for continuous play
