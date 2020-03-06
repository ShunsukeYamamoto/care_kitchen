class PersonalInformationsController < ApplicationController

  def create
    person = Person.find(params[:person_id])
    personalinformation = person.personal_informations.new(personal_information_params)
    if personalinformation.save
      redirect_to person_path(params[:person_id])
    else
      redirect_to root_path
    end
  end

  private

  def personal_information_params
    params.require(:personal_information).permit(:weight, :height, :date)
  end

end
