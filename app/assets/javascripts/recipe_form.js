$(function(){

  var ingredient_count = 0;
  var total_energy = 0;
  var total_protein = 0;
  var total_fat = 0;
  var total_carbon = 0;
  var total_vitaminA = 0;
  var total_vitaminB1 = 0.0;
  var total_vitaminC = 0;
  var total_calcium = 0;
  var total_dietaryFiber = 0;
  var total_salt = 0.0;

  function updateValue(){
    var energyHTML =`エネルギー ${total_energy}kcal` 
    var proteinHTML = `タンパク質 ${total_protein}g`
    var fatHTML =`脂質 ${total_fat}mg`
    var carbonHTML =`炭水化物  ${total_carbon}g`
    var vitaminAHTML =`ビタミンA  ${total_vitaminA}μg`
    var vitaminB1HTML =`ビタミンB1  ${total_vitaminB1}mg`
    var vitaminCHTML =`ビタミンC  ${total_vitaminC}mg`
    var calciumHTML =`カルシウム ${total_calcium}mg`
    var dietaryFiberHTML =`食物繊維  ${total_dietaryFiber}g`
    var saltHTML =`食塩  ${total_salt}g`
    var energyPercentageHTML =`<em>${Math.round(total_energy*100/900)}%</em>`
    var proteinPercentageHTML =`<em>${Math.round(total_protein*100/22)}%</em>`
    var fatPercentageHTML =`<em>${Math.round(total_fat*100/23)}%</em>`
    var carbonPercentageHTML =`<em>${Math.round(total_carbon*100/135)}%</em>`
    var vitaminAPercentageHTML =`<em>${Math.round(total_vitaminA*100/300)}%</em>`
    var vitaminB1PercentageHTML =`<em>${Math.round(total_vitaminB1*100/0.4)}%</em>`
    var vitaminCPercentageHTML =`<em>${Math.round(total_vitaminC*100/33)}%</em>`
    var calciumPercentageHTML =`<em>${Math.round(total_calcium*100/250)}%</em>`
    var dietaryFiberPercentageHTML =`<em>${Math.round(total_dietaryFiber*100/8)}%</em>`
    var saltPercentageHTML =`<em>${Math.round(total_salt*100/2.5)}%</em>`
    $(document).find('.energy_title').text(energyHTML)
    $(document).find('.energy_count').html(energyPercentageHTML)
    $(document).find('.protein_title').text(proteinHTML)
    $(document).find('.protein_count').html(proteinPercentageHTML)
    $(document).find('.fat_title').text(fatHTML)
    $(document).find('.fat_count').html(fatPercentageHTML)
    $(document).find('.carbon_title').text(carbonHTML)
    $(document).find('.carbon_count').html(carbonPercentageHTML)
    $(document).find('.vitaminA_title').text(vitaminAHTML)
    $(document).find('.vitaminA_count').html(vitaminAPercentageHTML)
    $(document).find('.vitaminB1_title').text(vitaminB1HTML)
    $(document).find('.vitaminB1_count').html(vitaminB1PercentageHTML)
    $(document).find('.vitaminC_title').text(vitaminCHTML)
    $(document).find('.vitaminC_count').html(vitaminCPercentageHTML)
    $(document).find('.calcium_title').text(calciumHTML)
    $(document).find('.calcium_count').html(calciumPercentageHTML)
    $(document).find('.dietaryFiber_title').text(dietaryFiberHTML)
    $(document).find('.dietaryFiber_count').html(dietaryFiberPercentageHTML)
    $(document).find('.salt_title').text(saltHTML)
    $(document).find('.salt_count').html(saltPercentageHTML)
  }

  function updateChart(){
    // エネルギー
    if (total_energy < 900){
      lack_energy = 900 - total_energy;
    }else{
      lack_energy = 0;
    }
    var energyData = {
      labels:  ["エネルギー","不足分"], 
      datasets: [{
                  data: [total_energy,lack_energy],
                  borderWidth: 1,
                  backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                  hoverBackgroundColor: ["#df5f4a","#fff"],
                  borderColor: "#2a324e"
                }]
      }
    var ctx = document.getElementById("recipeEnergyChart").getContext("2d");
    ctx.clearRect(0, 0, 130, 130);
    var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: energyData,
    options: {
    cutoutPercentage: 60,
    legend:{
    display: false
    }
    }
    });

    // タンパク質
    if (total_protein < 20){
      lack_protein = 20 - total_protein;
    }else{
      lack_protein = 0;
    }
    var proteinData = {
      labels:  ["タンパク質","不足分"], 
      datasets: [{
                  data: [total_protein,lack_protein],
                  borderWidth: 1,
                  backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                  hoverBackgroundColor: ["#df5f4a","#fff"],
                  borderColor: "#2a324e"
                }]
      }
    var ctx = document.getElementById("recipeProteinChart").getContext("2d");
    ctx.clearRect(0, 0, 130, 130);
    var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: proteinData,
    options: {
    cutoutPercentage: 60,
    legend:{
    display: false
    }
    }
    });

    // 脂質
    if (total_fat < 24){
      lack_fat = 24 - total_fat;
    }else{
      lack_fat = 0;
    }
    var fatData = {
      labels:  ["脂質","不足分"], 
      datasets: [{
                  data: [total_fat,lack_fat],
                  borderWidth: 1,
                  backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                  hoverBackgroundColor: ["#df5f4a","#fff"],
                  borderColor: "#2a324e"
                }]
      }
    var ctx = document.getElementById("recipeFatChart").getContext("2d");
    ctx.clearRect(0, 0, 130, 130);
    var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: fatData,
    options: {
      cutoutPercentage: 60,
      legend:{
      display: false
      }
    }
    });

    // 炭水化物
    if (total_carbon < 135){
      lack_carbon = 135 - total_carbon;
    }else{
      lack_carbon = 0;
    }
    var carbonData = {
      labels:  ["炭水化物","不足分"], 
      datasets: [{
                  data: [total_carbon,lack_carbon],
                  borderWidth: 1,
                  backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                  hoverBackgroundColor: ["#df5f4a","#fff"],
                  borderColor: "#2a324e"
                }]
      }
    var ctx = document.getElementById("recipeCarbonChart").getContext("2d");
    ctx.clearRect(0, 0, 130, 130);
    var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: carbonData,
    options: {
      cutoutPercentage: 60,
      legend:{
      display: false
      }
    }
    });

    // ビタミンA
    if (total_vitaminA < 300){
      lack_vitaminA = 300 - total_vitaminA;
    }else{
      lack_vitaminA = 0;
    }
    var vitaminAData = {
      labels:  ["ビタミンA","不足分"], 
      datasets: [{
                  data: [total_vitaminA,lack_vitaminA],
                  borderWidth: 1,
                  backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                  hoverBackgroundColor: ["#df5f4a","#fff"],
                  borderColor: "#2a324e"
                }]
      }
    var ctx = document.getElementById("recipeVitaminAChart").getContext("2d");
    ctx.clearRect(0, 0, 130, 130);
    var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: vitaminAData,
    options: {
      cutoutPercentage: 60,
      legend:{
      display: false
      }
    }
    });

    // ビタミンB1
    if (total_vitaminB1 < 0.4){
      lack_vitaminB1 = 0.4 - total_vitaminB1;
    }else{
      lack_vitaminB1 = 0.0;
    }
    var vitaminB1Data = {
      labels:  ["ビタミンB1","不足分"], 
      datasets: [{
                  data: [total_vitaminB1,lack_vitaminB1],
                  borderWidth: 1,
                  backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                  hoverBackgroundColor: ["#df5f4a","#fff"],
                  borderColor: "#2a324e"
                }]
      }
    var ctx = document.getElementById("recipeVitaminB1Chart").getContext("2d");
    ctx.clearRect(0, 0, 130, 130);
    var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: vitaminB1Data,
    options: {
      cutoutPercentage: 60,
      legend:{
      display: false
      }
    }
    });

    // ビタミンC
    if (total_vitaminC < 33){
      lack_vitaminC = 33 - total_vitaminC;
    }else{
      lack_vitaminC = 0;
    }
    var vitaminCData = {
      labels:  ["ビタミンC","不足分"], 
      datasets: [{
                  data: [total_vitaminC,lack_vitaminC],
                  borderWidth: 1,
                  backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                  hoverBackgroundColor: ["#df5f4a","#fff"],
                  borderColor: "#2a324e"
                }]
      }
    var ctx = document.getElementById("recipeVitaminCChart").getContext("2d");
    ctx.clearRect(0, 0, 130, 130);
    var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: vitaminCData,
    options: {
      cutoutPercentage: 60,
      legend:{
      display: false
      }
    }
    });

    // カルシウム
    if (total_calcium < 250){
      lack_calcium = 250 - total_calcium;
    }else{
      lack_calcium = 0;
    }
    var calciumData = {
      labels:  ["カルシウム","不足分"], 
      datasets: [{
                  data: [total_calcium,lack_calcium],
                  borderWidth: 1,
                  backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                  hoverBackgroundColor: ["#df5f4a","#fff"],
                  borderColor: "#2a324e"
                }]
      }
    var ctx = document.getElementById("recipeCalciumChart").getContext("2d");
    ctx.clearRect(0, 0, 130, 130);
    var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: calciumData,
    options: {
      cutoutPercentage: 60,
      legend:{
      display: false
      }
    }
    });


    // 食物繊維
    if (total_dietaryFiber < 8){
      lack_dietaryFiber = 8 - total_dietaryFiber;
    }else{
      lack_dietaryFiber = 0;
    }
    var dietaryFiberData = {
      labels:  ["食物繊維","不足分"], 
      datasets: [{
                  data: [total_dietaryFiber,lack_dietaryFiber],
                  borderWidth: 1,
                  backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                  hoverBackgroundColor: ["#df5f4a","#fff"],
                  borderColor: "#2a324e"
                }]
      }
    var ctx = document.getElementById("recipeDietaryFiberChart").getContext("2d");
    ctx.clearRect(0, 0, 130, 130);
    var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: dietaryFiberData,
    options: {
      cutoutPercentage: 60,
      legend:{
      display: false
      }
    }
    });

    // 塩分
    if (total_salt < 2.5){
      lack_salt = 2.5 - total_salt;
    }else{
      lack_salt = 0.0;
    }
    var saltData = {
      labels:  ["塩分","不足分"], 
      datasets: [{
                  data: [total_salt,lack_salt],
                  borderWidth: 1,
                  backgroundColor: ["#c54e44", "rgba(0,0,0,0)"],
                  hoverBackgroundColor: ["#df5f4a","#fff"],
                  borderColor: "#2a324e"
                }]
      }
    var ctx = document.getElementById("recipeSaltChart").getContext("2d");
    ctx.clearRect(0, 0, 130, 130);
    var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: saltData,
    options: {
      cutoutPercentage: 60,
      legend:{
      display: false
      }
    }
    });
  }

  // レシピに材料を非同期で追加追加
  
  $('.recipe_ingredients--form--submit').on('click',function(e){
    e.preventDefault();
    e.stopImmediatePropagation();

    function appendIngredient(data){
      var html = `<div class="recipe_ingredient">
                    <div class="recipe_ingredient--name">
                      <p>${data.name}</p>
                    </div>
                    <div class="recipe_ingredient--quantity">
                      <p>${data.quantity}g</p>
                    </div>
                    <div class="recipe_ingredient--delete">
                      <i class="fas fa-trash-alt delete_ingredient"></i>
                    </div>
                    <input value="${data.id}" type="hidden" name="recipe[recipe_ingredients_attributes][${ingredient_count}][ingredient_id]" id="recipe_recipe_ingredients_attributes_${ingredient_count}_ingredient_id" class="hidden_id">
                    <input value="${data.quantity}" type="hidden" name="recipe[recipe_ingredients_attributes][${ingredient_count}][quantity]" id="recipe_recipe_ingredients_attributes_${ingredient_count}_quantity" class="hidden_quantity">
                  </div>`
      ingredient_count += 1;
      $('.recipe_ingredients--area').append(html);
    }

    // 円グラフ、値更新
    
    var name = $(this).prevAll('#ingredient_name').val();
    $(this).prevAll('#ingredient_name').val("");
    var quantity = $(this).prevAll('#quantity').val();
    $(this).prevAll('#quantity').val("");
    $.ajax({
      url: "/recipes/search_ingredients",
      type: 'GET',
      data: {name: name,quantity: quantity},
      dataType: 'json'
    })
    .done(function(data){
      total_energy += data.energy_kcal
      total_protein += data.protein
      total_fat += data.fat
      total_carbon += data.carbon
      total_vitaminA += data.vitaminA
      total_vitaminB1 += data.vitaminB1
      total_vitaminC += data.vitaminC
      total_calcium += data.calcium
      total_dietaryFiber += data.dietaryFiber
      total_salt += data.salt
      appendIngredient(data);
      updateChart()
      updateValue()
    })
    .fail(function(){
      alert('食材がない、もしくは分量の値が適切ではありません');
    })
  })

  // 材料削除

  $(document).on('click','.recipe_ingredient--delete',function(){
    var dom = $(this).parent('.recipe_ingredient')
    var name = $(dom).children('.recipe_ingredient--name').children().text()
    var quantity = $(dom).children('.hidden_quantity').attr('value')
    $(dom).remove();
    $.ajax({
      url: "/recipes/search_ingredients",
      type: 'GET',
      data: {name: name,quantity: quantity},
      dataType: 'json'
    })
    .done(function(data){
      total_energy -= data.energy_kcal
      total_protein -= data.protein
      total_fat -= data.fat
      total_carbon -= data.carbon
      total_vitaminA -= data.vitaminA
      total_vitaminB1 -= data.vitaminB1
      total_vitaminC -= data.vitaminC
      total_calcium -= data.calcium
      total_dietaryFiber -= data.dietaryFiber
      total_salt -= data.salt
      updateChart()
      updateValue()
    })
    .fail(function(){
      alert('食材がない、もしくは分量の値が適切ではありません');
    })
  })

  // 作り方投稿

  var step_count = 0;

  $(document).on('click','.add_recipe',function(){
    if(step_count == 0){
      var prevDom = $(this).prev('.recipe_step')
      $(prevDom).find('.recipe_step--delete').remove();
      $(this).remove();
      step_count += 1;
      var step=`<div class="recipe_step">
                  <div class="recipe_step--delete">
                    <i class="fas fa-trash-alt"></i>
                  </div>
                  <label for="recipe_steps_attributes_${step_count}_image">
                    <div class="recipe_step--image">
                      <input class="image_label" type="file" name="recipe[steps_attributes][${step_count}][image]" id="recipe_steps_attributes_${step_count}_image">
                      <div class="recipe_step--image--icon">
                        <i class="fas fa-image"></i>
                        <p>作り方イメージ(任意)</p>
                      </div>
                    </div>
                  </label>
                  <div class="recipe_step__description">
                    <textarea class="recipe_step__description--form" placeholder="作り方" name="recipe[steps_attributes][${step_count}][description]" id="recipe_steps_attributes_${step_count}_description"></textarea>
                  </div>
                </div>`

      var add_step=`<div class="add_recipe">
                      <div class="add_recipe--icon">
                        <i class="fas fa-plus"></i>
                        <p>次の工程(最大6個)</p>
                      </div>
                    </div>`
      $('.recipe_steps').append(step);
      $('.recipe_steps').append(add_step);
    }else if(step_count < 4){
      var prevDom = $(this).prev('.recipe_step')
      $(prevDom).find('.recipe_step--delete').remove();
      $(this).remove();
      step_count += 1;
      var step=`<div class="recipe_step">
                  <div class="recipe_step--delete">
                    <i class="fas fa-trash-alt"></i>
                  </div>
                  <label for="recipe_steps_attributes_${step_count}_image">
                    <div class="recipe_step--image">
                      <input class="image_label" type="file" name="recipe[steps_attributes][${step_count}][image]" id="recipe_steps_attributes_${step_count}_image">
                      <div class="recipe_step--image--icon">
                        <i class="fas fa-image"></i>
                        <p>作り方イメージ(任意)</p>
                      </div>
                    </div>
                  </label>
                  <div class="recipe_step__description">
                    <textarea class="recipe_step__description--form" placeholder="作り方" name="recipe[steps_attributes][${step_count}][description]" id="recipe_steps_attributes_${step_count}_description"></textarea>
                  </div>
                </div>`
      var add_step=`<div class="add_recipe">
                      <div class="add_recipe--icon">
                        <i class="fas fa-plus"></i>
                        <p>次の工程(最大6個)</p>
                      </div>
                    </div>`
      $('.recipe_steps').append(step);
      $('.recipe_steps').append(add_step);
    }else{
      var prevDom = $(this).prev('.recipe_step')
      $(prevDom).find('.recipe_step--delete').remove();
      $(this).remove();
      step_count += 1
      var step=`<div class="recipe_step">
                  <div class="recipe_step--delete">
                    <i class="fas fa-trash-alt"></i>
                  </div>
                  <label for="recipe_steps_attributes_${step_count}_image">
                    <div class="recipe_step--image">
                      <input class="image_label" type="file" name="recipe[steps_attributes][${step_count}][image]" id="recipe_steps_attributes_${step_count}_image">
                      <div class="recipe_step--image--icon">
                        <i class="fas fa-image"></i>
                        <p>作り方イメージ(任意)</p>
                      </div>
                    </div>
                  </label>
                  <div class="recipe_step__description">
                    <textarea class="recipe_step__description--form" placeholder="作り方" name="recipe[steps_attributes][${step_count}][description]" id="recipe_steps_attributes_${step_count}_description"></textarea>
                  </div>
                </div>`
      $('.recipe_steps').append(step);
    }
  })

  // 作り方削除

  $(document).on('click','.recipe_step--delete',function(){
    if (step_count == 1){
      var dom = $(this).parent('.recipe_step')
      var prevDom = $(dom).prev('.recipe_step');
      
      $(dom).remove();
      step_count -= 1;
    }else if(step_count < 4){
      var dom = $(this).parent('.recipe_step')
      var prevDom = $(dom).prev('.recipe_step');
      var deleteBtn =`<div class="recipe_step--delete">
                        <i class="fas fa-trash-alt"></i>
                      </div>`
      $(dom).remove();
      $(prevDom).prepend(deleteBtn);
      if(step_count > 0){
        step_count -= 1;
      }
    }else{
      var dom = $(this).parent('.recipe_step')
      var prevDom = $(dom).prev('.recipe_step');
      var deleteBtn =`<div class="recipe_step--delete">
                        <i class="fas fa-trash-alt"></i>
                      </div>`
      $(dom).remove();
      $('.add_recipe').remove()
      $(prevDom).prepend(deleteBtn);
      step_count -= 1;
      var add_step=`<div class="add_recipe">
                      <div class="add_recipe--icon">
                        <i class="fas fa-plus"></i>
                        <p>次の工程(最大6個)</p>
                      </div>
                    </div>`
      $('.recipe_steps').append(add_step);
    }
    
  })


})

