class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :name, null: false
      t.float :height, null: false
      t.float :weight, null:false
      t.string :gender, null: false
      t.date :birthday,null: false

      t.timestamps
    end
  end
end
