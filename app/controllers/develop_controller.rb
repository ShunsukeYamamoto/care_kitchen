class DevelopController < ApplicationController
  before_action :move_to_sign_up

  def index
  end

  private

  def move_to_sign_up
    redirect_to new_user_registration_path unless user_signed_in?
  end
end
