$(function(){
  $('#navToggle').click(function(){
    $('header').toggleClass('openNav');
    $('.global-nav').slideToggle();
  });
});
