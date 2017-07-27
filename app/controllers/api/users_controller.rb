class Api::UsersController < ApplicationController

  def create
		@user = User.new(user_params)

		if @user.save
			sign_in(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

  def update
    @user = User.find_by(id: params[:id])

    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
    
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

	private

	def user_params
		params.require(:user).permit(:username, :password)
	end

end
