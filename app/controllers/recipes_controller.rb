class RecipesController < ApplicationController
  autocomplete :ingredient,:name,full: true

  def index
    @recipes = current_user.recipes
  end
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

  def show
    @recipe = Recipe.find(params[:id])
    if @recipe.energy_kcal >= 270
      gon.calorie = 270
    else
      gon.calorie = @recipe.energy_kcal
    end
    if @recipe.protein >= 20
      gon.protein = 20
    else
      gon.protein = @recipe.protein
    end
    if @recipe.fat >= 30
      gon.fat = 30
    else
      gon.fat = @recipe.fat
    end
    if @recipe.carbon >= 145
      gon.carbon = 145
    else
      gon.carbon = @recipe.carbon
    end
    if @recipe.vitamin_a >= 300
      gon.vitamin_a = 300
    else
      gon.vitamin_a = @recipe.vitamin_a
    end
    if @recipe.vitamin_b1 >= 0.45
      gon.vitamin_b1 = 0.45
    else
      gon.vitamin_b1 = @recipe.vitamin_b1
    end
    if @recipe.vitamin_c >= 33
      gon.vitamin_c = 33
    else
      gon.vitamin_c = @recipe.vitamin_c
    end
    if @recipe.salt >= 2.7
      gon.salt = 2.7
    else
      gon.salt = @recipe.salt
    end
    if @recipe.dietary_fiber >= 7
      gon.dietary_fiber = 7
    else
      gon.dietary_fiber = @recipe.dietary_fiber
    end
    if @recipe.calcium >= 270
      gon.calcium = 270
    else
      gon.calcium = @recipe.calcium
    end
    @energy_kcal_rate = (@recipe.energy_kcal/2.7).round
    @protein_rate = (@recipe.protein/0.2).round
    @fat_rate = (@recipe.fat/0.3).round
    @carbon_rate = (@recipe.carbon/1.45).round
    @vitamin_a_rate = (@recipe.vitamin_a/3).round
    @vitamin_b1_rate = (@recipe.vitamin_b1/0.0045).round
    @vitamin_c_rate = (@recipe.vitamin_c/0.33).round
    @salt_rate = (@recipe.salt/0.027).round
    @dietary_fiber_rate = (@recipe.dietary_fiber/0.07).round
    @calcium_rate = (@recipe.calcium/2.7).round
    
    @favorite = Favorite.new
  end

  def search
    @recipes = Recipe.search(params[:keyword])
    @keyword = "#{params[:keyword]}"
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
