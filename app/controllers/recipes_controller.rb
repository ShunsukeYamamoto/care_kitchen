class RecipesController < ApplicationController
  autocomplete :ingredient,:name,full: true

  def new
    @recipe = current_user.recipes.new
    @recipe.steps.new
    @recipe.recipe_ingredients.new
    @recipe.ingredients.new
  end

  def create
    @recipe = Recipe.new(recipe_params)
    @recipe.recipe_ingredients.each do |data|
      food = Ingredient.find(data.ingredient_id)
      @recipe[:energy_kcal] = food[:energy_kcal]
      @recipe[:protein] = food[:protein]
      @recipe[:fat] = food[:fat]
      @recipe[:carbon] = food[:carbon]
      @recipe[:vitamin_a] = food[:vitamin_a]
      @recipe[:vitamin_b1] = food[:vitamin_b1]
      @recipe[:vitamin_c] = food[:vitamin_c]
      @recipe[:calcium] = food[:calcium]
      @recipe[:dietary_fiber] = food[:dietary_fiber]
      @recipe[:salt] = food[:salt]
    end
    if @recipe.save
      redirect_to root_path
    else
      render :new
    end
  end

  def index
    @recipe = Recipe.new
  end


  def search_ingredients
    ingredient = Ingredient.where(name: "#{params[:name]}").first
    quantity = params[:quantity]
    if ingredient.present? && quantity.present?
      @data = {id: ingredient.id,name: ingredient.name,quantity: quantity}
    end
  end


  private

  def recipe_params
    params.require(:recipe).permit(:title, :image, :text, steps_attributes: [:image, :description], recipe_ingredients_attributes: [:ingredient_id, :quantity]).merge(user_id: current_user.id)
  end
  
  
end
