class CreateMeals < ActiveRecord::Migration[5.2]
  def change
    create_table :meals do |t|
      t.string     :name,          null: false
      t.integer    :energy_kcal
      t.float      :protein
      t.float      :fat
      t.float      :carbon
      t.float      :dietary_fiber
      t.integer    :calcium
      t.integer    :vitamin_a
      t.float      :vitamin_b1
      t.integer    :vitamin_c
      t.float      :salt
      t.references :person, foreign_key: true
      t.integer    :recipe_id
      t.datetime   :time, null: false
      t.timestamps
    end
  end
end
