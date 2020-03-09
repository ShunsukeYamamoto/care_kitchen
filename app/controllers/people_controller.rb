class PeopleController < ApplicationController

  def new
    
  end

  def create
  end

  def show
    @person = Person.find(params[:id])
    informations = @person.personal_informations.order(:date).last(14) #日付をdateの昇順に並べてから最後の14つを取り出す
    @bmis=[]
    @days=[]
    informations.each do |information|
      @bmis << information.bmi
      @days << information.date.strftime("%-m/%d") #-mで月の0を無くす
    end
    new_information = informations.last
    new_weight = new_information.weight
    @new_height = new_information.height
    @new_bmi = (new_weight/@new_height/@new_height).round(1)
    @personalinformation=@person.personal_informations.new

    gon.bmis = @bmis
    gon.days = @days
  end


end
