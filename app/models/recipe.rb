class Recipe < ApplicationRecord
  belongs_to :user
  has_many :recipe_ingredients
  accepts_nested_attributes_for :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredient
  has_many :steps
  accepts_nested_attributes_for :steps
end