class ToppageController < ApplicationController
  def index
    @people = current_user.people
  end
end
