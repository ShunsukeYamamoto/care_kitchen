class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :title, null: false, index: true
      t.string :image
      t.text :text
      t.references :user, foreign_key: true
      t.integer    :energy_kcal,   null: false
      t.float      :protein,       null: false
      t.float      :fat,           null: false
      t.float      :carbon,        null: false
      t.integer    :vitamin_a,     null: false
      t.float      :vitamin_b1,    null: false
      t.integer    :vitamin_c,     null: false
      t.integer    :calcium,       null: false
      t.float      :dietary_fiber, null: false
      t.float      :salt,          null: false

      t.timestamps
    end
  end
end
