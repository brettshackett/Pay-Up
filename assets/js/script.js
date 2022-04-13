$(function(){

$('#add').click(function(){
  var form = $('.person-bill:last').clone();
  $(form).insertAfter('.person-bill:last'); 
});

})
