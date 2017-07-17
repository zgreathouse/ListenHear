# Schema Information

## Users                  
column name         |  data type    |  details
--------------------|---------------|---------------------
Id                  | integer       |  not null, primary key
username            | string        |  not null, unique
password_digest     | string        |  not null,
session_token       | string        |  not null, unique
profile_picture_url | string        |

## Follows (join table between users)
column name         |  data type    |  details
--------------------|---------------|---------------------
Id                  | integer       |  not null, primary key
follower_id         | integer       |  not null, foreign key
followed_id         | integer       |  not null, foreign key

## Songs
column name         |  data type    |  details
--------------------|---------------|---------------------
Id                  | integer       | not null, primary key
song_url            | string        | not null, unique
title               | string        | not null
Artist              | string        | not null
genre               | string        | not null
user_id             | integer       | not null, foreign key
Image_url           | string        |    
time_of_upload      | string        | not null

## Comments
column name         |  data type    |  details
--------------------|---------------|---------------------
Id                  | integer       | not null, primary key
song_id             | integer       | not null, foreign key
user_id             | integer       | not null, foreign key
body                | text          | not null
comment_time        | string        | not null

## Likes (join table between users and songs)
column name         |  data type    |  details
--------------------|---------------|---------------------
Id                  | integer       | not null, primary key
user_id             | integer       | not null, foreign key
song_id             | integer       | not null, foreign key
