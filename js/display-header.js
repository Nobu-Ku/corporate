$(function(){
  $('#header').hide();
 $(window).scroll(function(){
     var POS = $('.about').offset().top;
     var scroll = $(window).scrollTop();
     var windowHeight = $(window).height();
     if(scroll > POS - windowHeight + windowHeight/1.5){
       $('#header').fadeIn();
     }else{
       $('#header').fadeOut();
     }
   });
 });
