$(function(){

  // レシピに材料を非同期で追加追加
  var ingredient_count = 0;
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
                    <input value="${data.id}" type="hidden" name="recipe[recipe_ingredients_attributes][${ingredient_count}][ingredient_id]" id="recipe_recipe_ingredients_attributes_${index}_ingredient_id">
                    <input value="${data.quantity}" type="hidden" name="recipe[recipe_ingredients_attributes][${ingredient_count}][quantity]" id="recipe_recipe_ingredients_attributes_${index}_quantity">
                  </div>`
      index += 1;

      $('.recipe_ingredients--area').append(html);

    }
    
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
      appendIngredient(data);
    })
    .fail(function(){
      alert('食材がない、もしくは分量の値が適切ではありません');
    })
  })

  $(document).on('click','.recipe_ingredient--delete',function(){
    var dom = $(this).parent('.recipe_ingredient')
    $(dom).remove();
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

