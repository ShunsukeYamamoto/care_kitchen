class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :title, null: false, index: true
      t.string :image
      t.text :text
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
