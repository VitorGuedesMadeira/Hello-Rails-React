class GreetingsController < ApplicationController
  def random
    render json: Greeting.all.sample
  end
end
