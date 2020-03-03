class PeopleController < ApplicationController

  def show
    @person = Person.find(params[:id])
    @informations = @person.personal_informations
    @new_information = @informations.last
    @new_weight = @new_information.weight
    @new_height = @new_information.height/100
    @new_bmi = (@new_weight/@new_height/@new_height).round(2)
  end

end
