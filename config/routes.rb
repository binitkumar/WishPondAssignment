Rails.application.routes.draw do
  root to: 'visitors#index'

  resources :photos, only: [:create]
  resources :plays, only: [:index, :create]
end
