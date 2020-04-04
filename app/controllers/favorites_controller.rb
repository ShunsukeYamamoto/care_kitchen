class FavoritesController < ApplicationController
  before_action :authenticate_user!

  def index
    @recipes = current_user.favorite_recipes
  end

  def create
    @favorite = current_user.favorites.create(recipe_id: params[:recipe_id])
    redirect_to recipe_path(params[:recipe_id])
  end

  def destroy
    @favorite = Favorite.find_by(recipe_id: params[:recipe_id], user_id: current_user.id)
    @favorite.destroy
    redirect_to recipe_path(params[:recipe_id])
  end
end
