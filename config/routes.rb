Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'job_opps/index'
      get 'job_opps/:job_source', to: 'job_opps#jobsbyboard'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
