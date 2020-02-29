class Person < ApplicationRecord
  validates :name,:height,:weight,:gender,presence: true
  belongs_to :user,optional: true

  enum gender: {
    "男性": "0",
    "女性": "1"
  }
  
end
