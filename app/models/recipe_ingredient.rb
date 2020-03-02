class RecipeIngredient < ApplicationRecord
  has_many :recipes
  has_many :ingredients
end
