class PersonalInformation < ApplicationRecord
  belongs_to :person,optional: true
end
