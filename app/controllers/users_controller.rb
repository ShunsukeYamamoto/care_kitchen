class UsersController < ApplicationController

  def show
    @people = current_user.people
  end

  def edit
  end

  def update
  end
  
end
