class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :name,null:false
      t.integer :energy_kcal,null: false
      t.float :protein,null: false
      t.float :fat,null: false
      t.float :carbon,null: false
      t.float :dietary_fiber,null: false
      t.integer :natrium, null: false
      t.integer :kalium,null: false
      t.integer :calcium, null: false
      t.integer :magnesium,null: false
      t.float :iron,null:false
      t.float :zinc,null: false
      t.integer :vitamin_a,null: false
      t.integer :vitamin_d,null: false
      t.integer :vitamin_k,null: false
      t.float :vitamin_b1,null: false
      t.float :vitamin_b2,null: false
      t.float :vitamin_b6,null: false
      t.float :vitamin_b12,null: false
      t.integer :folic_acid,null: false
      t.integer :vitamin_c,null: false
      t.float :salt,null:false

      t.timestamps
    end
  end
end
