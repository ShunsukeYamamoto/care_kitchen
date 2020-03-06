class CreatePersonalInformations < ActiveRecord::Migration[5.2]
  def change
    create_table :personal_informations do |t|
      t.float :weight, null:false
      t.float :height, null: false
      t.date :date,null: false
      t.references :person,foreign_key: true

      t.timestamps
    end
  end
end
