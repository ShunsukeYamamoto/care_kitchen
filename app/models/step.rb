class Step < ApplicationRecord
  has_many :recipes

  mount_uploader :image, ImageUploader
end
