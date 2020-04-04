class Person < ApplicationRecord
  belongs_to :user, optional: true
  has_many :personal_informations, inverse_of: :person
  accepts_nested_attributes_for :personal_informations, allow_destroy: true

  with_options presence: true do
    validates :name
    validates :gender
    validates :birthday
    validates :image
  end
  enum gender: {
    "男性": '0',
    "女性": '1'
  }
end
