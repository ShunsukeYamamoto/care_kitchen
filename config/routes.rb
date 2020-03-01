Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
  }
  devise_scope :user do
    get 'new_first_person', to: 'users/registrations#new_first_person'
    post 'create_first_person', to: 'users/registrations#create_first_person'
  end
  root "toppage#index"
  resources :recipes, only: [:new, :create]
end
