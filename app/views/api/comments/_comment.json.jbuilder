json.extract! comment, :id, :body, :user_id, :song_id
json.user_username comment.user.username
json.time time_ago_in_words(comment.created_at)
