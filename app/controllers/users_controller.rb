class UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    @people = current_user.people
  end

  def edit; end

  def update
    if current_user.update(user_params)
      redirect_to root_path, notice: 'ユーザーを更新しました'
    else
      flash.now[:alert] = 'ユーザーを更新できませんでした'
      render :edit
    end
  end

  def destroy; end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
