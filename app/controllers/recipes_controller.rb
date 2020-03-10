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
    quantity = params[:quantity].to_i.round
    if ingredient.present? && quantity.present?
      energy = ingredient.energy_kcal * (quantity/100)
      protein = ingredient.protein * (quantity/100)
      fat = ingredient.fat * (quantity/100)
      carbon = ingredient.carbon * (quantity/100)
      vitaminA = ingredient.vitamin_a * (quantity/100)
      vitaminB1 = ingredient.vitamin_b1 * (quantity/100)
      vitaminC = ingredient.vitamin_c * (quantity/100)
      calcium = ingredient.calcium * (quantity/100)
      dietary_fiber = ingredient.dietary_fiber * (quantity/100)
      salt = ingredient.salt * (quantity/100)
      @data = {id: ingredient.id,name: ingredient.name,quantity: quantity,energy_kcal: energy.round,protein: protein.round,fat: fat.round,carbon: carbon.round,vitaminA: vitaminA.round,vitaminB1: vitaminB1.round(1),vitaminC: vitaminC.round,calcium: calcium.round,dietary_fiber: dietary_fiber.round,salt: salt.round(1)}
    end
  end


  private

  def recipe_params
    params.require(:recipe).permit(:title, :image, :text, steps_attributes: [:image, :description], recipe_ingredients_attributes: [:ingredient_id, :quantity]).merge(user_id: current_user.id)
  end
end
