Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update] do
      resources :songs, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :songs, except: [:new, :edit]
    resources :comments, except: [:new, :edit, :update]
    get 'song/:id/comments', to: 'comments#song_comments'
  end

end
