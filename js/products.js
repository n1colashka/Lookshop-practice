$(function () {

   $('.header-top__currency-link.current').on('click', function () {
      $('.header-top__currency-item').toggleClass('open');
      $('.header-top__currency-list').toggleClass('open');
   });

   $('.clothes-slider__content').slick({
      arrows: true,
      dots: true,
      draggable: false
   });

   $("#slider-range").slider({
      range: true,
      min: 0,
      max: 300,
      values: [0, 300],
      slide: function (event, ui) {
         $("#filter-range").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
   });
   $("#filter-range").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));

});