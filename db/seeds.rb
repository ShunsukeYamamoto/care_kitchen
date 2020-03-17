require "csv"

CSV.foreach('db/csv/ingredients.csv',headers: true) do |row|
  Ingredient.create(
    name:          row['name'],
    energy_kcal:   row['energy_kcal'],
    protein:       row['protein'],
    fat:           row['fat'],
    carbon:        row['carbon'],
    dietary_fiber: row['dietary_fiber'],
    natrium:       row['natrium'],
    kalium:        row['kalium'],
    calcium:       row['calcium'],
    magnesium:     row['magnesium'],
    iron:          row['iron'],
    zinc:          row['zinc'],
    vitamin_a:     row['vitamin_a'],
    vitamin_d:     row['vitamin_d'],
    vitamin_k:     row['vitamin_k'],
    vitamin_b1:    row['vitamin_b1'],
    vitamin_b2:    row['vitamin_b2'],
    vitamin_b6:    row['vitamin_b6'],
    vitamin_b12:   row['vitamin_b12'],
    folic_acid:    row['folic_acid'],
    vitamin_c:     row['vitamin_c'],
    salt:          row['salt']
  )
end

User.create(id: 1,name: "testuser",email: "shun@gmail.com",password: "shun0113")
Person.create(id: 1,name: "testperson1",gender: "0",birthday: "1990-01-01",user_id: 1,image: "icon1.png")
PersonalInformation.create(id: 1,weight: 72.3,height: 1.75,date: Date.today,bmi: 23.6,person_id: 1)