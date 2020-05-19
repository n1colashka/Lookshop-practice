$(function(){

   $('.slider').slick({
      arrows: true,
      dots: true,
      draggable: false
   });

   $('.header-top__currency-link.current').on('click', function(){
      $('.header-top__currency-item').toggleClass('open');
      $('.header-top__currency-list').toggleClass('open');
   });

});