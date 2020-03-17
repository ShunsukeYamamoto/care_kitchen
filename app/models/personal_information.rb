class PersonalInformation < ApplicationRecord
  belongs_to :person,optional: true

  with_options presence: true do
    validates :date
    validates :weight
    validates :height
    validates :bmi
    
end
