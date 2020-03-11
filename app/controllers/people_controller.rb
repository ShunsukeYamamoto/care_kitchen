class PeopleController < ApplicationController

  def new
    @person = Person.new
    @person.personal_informations.new
  end

  def create
    @person = Person.new(person_params)
    if @person.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    @person = Person.find(params[:id])
  end

  def update
    @person = Person.find(params[:id])
    if @person.update(person_update_params)
      redirect_to person_path
    else
      render :edit
    end
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

  def destroy
    person = Person.find(params[:id])
    person.destroy
    redirect_to root_path, notice: 'グループを削除しました'
  end

  private

  def person_params
    params.require(:person).permit(:name, :gender, :birthday, :image, personal_informations_attributes: [:weight, :height, :date, :bmi]).merge(user_id: current_user.id)
  end

  def person_update_params
    params.require(:person).permit(:name, :gender, :birthday, :image).merge(user_id: current_user.id)
  end

end
