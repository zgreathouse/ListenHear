# ListenHear

## Minimum Viable Product

A faithful clone to soundcloud.com. This sight allows you to upload,
listen to, edit, and delete music of your own, search, like, and comment
on other user’s uploads, and finally features
continuous play so you may do all of the above seamlessly as you explore
the site.

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Song CRUD
- [ ] Playing songs with progress bar with continuous play
- [ ] User pages
- [ ] Comments
- [ ] Likes
- [ ] Followers

## Design Docs

* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md
[sample-state]: sample-state.md


## Implementation Timeline

### Phase 1: Set up Backend skeleton and frontend Authentication (2 days)
**Objective:** Functioning rails project with frontend authentication, find songs to seed DB with

### Phase 2: Upload Songs (3 days)
**Objective:** Upload/ song belong to users and CRUD made possible through API, seed DB with songs

### Phase 3: SongPlayer (3 days)
**Objective:** Create SongPlayer widget which allows for continuous play

### Phase 4: Commenting and Liking Songs (2 days)
**Objective:** Allow for users to comment and like other songs, components included

### Phase 5: User Pages (3 days)
**Objective:** Profile pages for users, components included
