Rails.application.routes.draw do
  root 'root#index'
  get 'greetings/random'
end
