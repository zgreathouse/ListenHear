class Api::SongsController < ApplicationController

  def show
    @song = Song.find(params[:id])
  end

  def create
    @song = Song.new(song_params)
    @song.artist_id = current_user.id

    if @song.save
     render :show
    else
     render json: @song.errors, status: :unprocessable_entity
    end
  end

  def index
    @songs = Song.all
  end

  # def update
  #
  # end

  def destroy
    @song = Song.find(params[:id])
    if @song.delete
     render :delete
    else
     render json: @song.errors, status: :unprocessable_entity
    end
  end

  private
  def song_params
    params.require(:song).permit(:title, :genre, :description, :artist_id, :track, :avatar)
  end
end
