class RecipesController < ApplicationController
  autocomplete :ingredient,:name,full: true

  def new
    @recipe = current_user.recipes.new
    @recipe.steps.new
    @recipe.recipe_ingredients.new
  end

  def create
    binding.pry
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      redirect_to root_path
    else
      render :new
    end
  end

  def index
    @recipe = Recipe.new
  end

  def search
    @recipes = Recipe.search(params[:keyword])
  end


  private

  def recipe_params
    params.require(:recipe).permit(:name, :image, :text, steps_attributes: [:image, :description], recipe_ingredients_attributes: [:ingredient_id, :quantity]).merge(user_id: current_user.id)
  end
  
  
end
