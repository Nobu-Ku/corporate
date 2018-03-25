$(function(){
 $(window).scroll(function(){
   $('.about').each(function(){
     var POS = $('.about').offset().top;
     var scroll = $(window).scrollTop();
     var windowHeight = $(window).height();

     if(scroll > POS - windowHeight + windowHeight/5){
       $('body::before').css({
         'content':'',
         'position': 'fixed',
         'top': '-5px',
         'bottom': '-5px',
         'left': '-5px',
         'right': '-5px',
         'background': 'inherit',
         'filter': 'blur(5px)',
         'z-index': '-1'
       });
     }else{
       $('body::before').css({
         'content':'',
          'display': 'none'
       });
     }
   });
 });
});
