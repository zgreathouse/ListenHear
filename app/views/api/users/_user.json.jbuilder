json.extract! user, :id, :username, :image_url, :cover_art_url
json.image_url user.avatar.url
json.cover_art_url user.cover_art.url
