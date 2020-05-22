$(function () {

   $('.slider').slick({
      arrows: true,
      dots: true,
      draggable: false
   });

   $('.products__slider').slick({
      arrows: true,
      dots: false,
      draggable: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '85px',
   });


   $('.header-top__currency-link.current').on('click', function () {
      $('.header-top__currency-item').toggleClass('open');
      $('.header-top__currency-list').toggleClass('open');
   });



});