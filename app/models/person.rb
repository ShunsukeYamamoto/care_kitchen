class Person < ApplicationRecord
  validates :name,:gender,presence: true
  belongs_to :user,optional: true
  has_many :personal_informations
  accepts_nested_attributes_for :personal_informations,allow_destroy: true

  enum gender: {
    "男性": "0",
    "女性": "1"
  }
  
end
