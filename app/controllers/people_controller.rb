class PeopleController < ApplicationController

  def show
    @person = Person.find(params[:id])
    informations = @person.personal_informations.last(14)
    @bmis=[]
    informations.each do |information|
      @bmis << information.bmi
    end
    binding.pry
    new_information = informations.last
    new_weight = new_information.weight
    @new_height = new_information.height
    @new_bmi = (new_weight/@new_height/@new_height).round(1)
    @personalinformation=@person.personal_informations.new
    
  end


end
