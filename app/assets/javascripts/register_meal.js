$(function(){
  $('.fa-window-close').on('click',function(e){
    e.preventDefault();
    var dom = $(this).parents('.register_meal')
    $(dom).hide();
  })
  $('.post-btn__meal').on('click',function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    var dom = $(document).find('.register_meal')
  })
})