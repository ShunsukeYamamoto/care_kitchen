class RecipesController < ApplicationController

  def new
    @recipe = Recipe.new
    @recipe.steps.new
    @recipe.recipe_ingredients.new
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :image, :text, steps_attributes: [:image, :description], recipe_ingredients_attributes: [:ingredient_id, :quantity]).merge(user_id: current_user.id)
  end
  
end
