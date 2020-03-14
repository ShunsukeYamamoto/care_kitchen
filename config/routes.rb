Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
  }
  devise_scope :user do
    get 'new_first_person', to: 'users/registrations#new_first_person'
    post 'create_first_person', to: 'users/registrations#create_first_person'
  end
  root "toppage#index"
  resources :users, only: [:show, :edit, :update]
  resources :people, only: [:show, :new, :create, :edit, :update, :destroy] do
    resources :personal_informations, only: [:create]
  end
  resources :recipes, only: [:index, :new, :create, :show] do
    resources :favorites, only: [:create, :destroy]
    collection do
      get 'search_ingredients'
      get 'autocomplete_ingredient_name'
      get 'search'
    end
  end
  resources :favorites, only: [:index]
end
