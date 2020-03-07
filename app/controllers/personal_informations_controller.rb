class PersonalInformationsController < ApplicationController

  def create
    person = Person.find(params[:person_id])
    personal_information = person.personal_informations.new(personal_information_params)
    bmi=(personal_information[:weight]/personal_information[:height]/personal_information[:height]).round(1)
    personal_information[:bmi] = bmi
    if personal_information.save
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
