FactoryBot.define do

  factory :user do
    name {"テスト"}
    email {"test@email.test"}
    password {"test123"}
    password_confirmation {"test123"}
  end

end 