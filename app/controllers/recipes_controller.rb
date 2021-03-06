class RecipesController < ApplicationController
  autocomplete :ingredient, :name, full: true
  before_action :authenticate_user!, except: %i[show search]

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
    @recipe[:energy_kcal] = params[:recipe][:total_energy].to_i
    @recipe[:protein] = params[:recipe][:total_protein].to_i
    @recipe[:fat] = params[:recipe][:total_fat].to_i
    @recipe[:carbon] = params[:recipe][:total_carbon].to_i
    @recipe[:vitamin_a] = params[:recipe][:total_vitaminA].to_i
    @recipe[:vitamin_b1] = params[:recipe][:total_vitaminB1].to_f
    @recipe[:vitamin_c] = params[:recipe][:total_vitaminC].to_i
    @recipe[:calcium] = params[:recipe][:total_calcium].to_i
    @recipe[:dietary_fiber] = params[:recipe][:total_dietaryFiber].to_i
    @recipe[:salt] = params[:recipe][:total_salt].to_f
    if @recipe.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @recipe = Recipe.find(params[:id])
    gon.calorie = if @recipe.energy_kcal >= 270
                    270
                  else
                    @recipe.energy_kcal
                  end
    gon.protein = if @recipe.protein >= 20
                    20
                  else
                    @recipe.protein
                  end
    gon.fat = if @recipe.fat >= 30
                30
              else
                @recipe.fat
              end
    gon.carbon = if @recipe.carbon >= 145
                   145
                 else
                   @recipe.carbon
                 end
    gon.vitamin_a = if @recipe.vitamin_a >= 300
                      300
                    else
                      @recipe.vitamin_a
                    end
    gon.vitamin_b1 = if @recipe.vitamin_b1 >= 0.45
                       0.45
                     else
                       @recipe.vitamin_b1
                     end
    gon.vitamin_c = if @recipe.vitamin_c >= 33
                      33
                    else
                      @recipe.vitamin_c
                    end
    gon.salt = if @recipe.salt >= 2.7
                 2.7
               else
                 @recipe.salt
               end
    gon.dietary_fiber = if @recipe.dietary_fiber >= 7
                          7
                        else
                          @recipe.dietary_fiber
                        end
    gon.calcium = if @recipe.calcium >= 270
                    270
                  else
                    @recipe.calcium
                  end
    @energy_kcal_rate = (@recipe.energy_kcal / 2.7).round
    @protein_rate = (@recipe.protein / 0.2).round
    @fat_rate = (@recipe.fat / 0.3).round
    @carbon_rate = (@recipe.carbon / 1.45).round
    @vitamin_a_rate = (@recipe.vitamin_a / 3).round
    @vitamin_b1_rate = (@recipe.vitamin_b1 / 0.0045).round
    @vitamin_c_rate = (@recipe.vitamin_c / 0.33).round
    @salt_rate = (@recipe.salt / 0.027).round
    @dietary_fiber_rate = (@recipe.dietary_fiber / 0.07).round
    @calcium_rate = (@recipe.calcium / 2.7).round

    @favorite = Favorite.new
  end

  def search
    @recipes = Recipe.search(params[:keyword])
    @keyword = params[:keyword].to_s
  end

  def search_ingredients
    ingredient = Ingredient.where(name: params[:name].to_s).first
    quantity = params[:quantity].to_i.round
    if ingredient.present? && quantity.present?
      energy = ingredient.energy_kcal * quantity / 100
      protein = ingredient.protein * quantity / 100
      fat = ingredient.fat * quantity / 100
      carbon = ingredient.carbon * quantity / 100
      vitaminA = ingredient.vitamin_a * quantity / 100
      vitaminB1 = ingredient.vitamin_b1 * quantity / 100
      vitaminC = ingredient.vitamin_c * quantity / 100
      calcium = ingredient.calcium * quantity / 100
      dietary_fiber = ingredient.dietary_fiber * quantity / 100
      salt = ingredient.salt * quantity / 100
      @data = { id: ingredient.id, name: ingredient.name, quantity: quantity, energy_kcal: energy.round, protein: protein.round, fat: fat.round, carbon: carbon.round, vitaminA: vitaminA.round, vitaminB1: vitaminB1.round(1), vitaminC: vitaminC.round, calcium: calcium.round, dietary_fiber: dietary_fiber.round, salt: salt.round(1) }
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :image, :text, steps_attributes: %i[image description], recipe_ingredients_attributes: %i[ingredient_id quantity]).merge(user_id: current_user.id)
  end
end
