class ToppageController < ApplicationController
  def index
    if user_signed_in?
      @people = current_user.people
    end
  end
end
