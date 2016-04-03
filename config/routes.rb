Rails.application.routes.draw do
  get '/', to: 'products#index', as: :root
end
