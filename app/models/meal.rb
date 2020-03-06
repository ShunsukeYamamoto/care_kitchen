class Meal < ApplicationRecord
  belongs_to :person
  has_many :meal_ingredients
  has_many :ingredients, through: :meal_ingredient
end
