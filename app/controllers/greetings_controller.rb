class GreetingsController < ApplicationController
  def random
    single_greeting = Greeting.all.sample
    render json: single_greeting
  end
end
