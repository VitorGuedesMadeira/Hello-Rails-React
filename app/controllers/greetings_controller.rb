class GreetingsController < ApplicationController
  def random
    all_greetings = Greeting.all
    single_greeting = all_greetings.sample
    render json: single_greeting
  end
end
