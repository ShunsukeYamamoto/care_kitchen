Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
  }
  devise_scope :user do
    get 'new_first_person', to: 'users/registrations#new_first_person'
    post 'create_first_person', to: 'users/registrations#create_first_person'
  end
  root "toppage#index"
  resources :people, only: [:show] do
    resources :personal_informations, only: [:create]
  end
  resources :recipes, only: [:index, :new, :create] do
    collection do
      get 'search_ingredients'
      get 'autocomplete_ingredient_name'
      get 'search'
    end
  end
end
