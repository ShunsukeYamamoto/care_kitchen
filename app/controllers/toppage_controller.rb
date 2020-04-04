class ToppageController < ApplicationController
  def index
    @people = current_user.people if user_signed_in?
  end
end
