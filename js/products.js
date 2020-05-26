$(function () {

   $('.header-top__currency-link.current').on('click', function () {
      $('.header-top__currency-item').toggleClass('open');
      $('.header-top__currency-list').toggleClass('open');
   });

   // clothes slider
   $('.clothes-slider__content').slick({
      arrows: true,
      dots: true,
      draggable: false
   });

   // range slider
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

   // filter drop down list
   let categoriesList = $('.filter__categories-list');
   let categoriesItems = $('.filter__categories-item-title');

   $(categoriesList).on('click', function (event) {
      let target = event.target;

      if (target && $(target).hasClass('filter__categories-item-title')) {
         for (let i = 0; i < categoriesItems.length; i++) {
            if (target == categoriesItems[i]) {
               $(categoriesItems[i]).next().toggle('open');
               $(categoriesItems[i]).parent().toggleClass('open');
            }
         }
      }
   });

   // subitems click
   let subItems = $('.filter__categories-subitem-title');

   $(subItems).on('click', function (event) {
      let target = event.target;

      for (let i = 0; i < subItems.length; i++) {
         if (target == subItems[i]) {

            for (let j = 0; j < subItems.length; j++) {
               $(subItems[j]).parent().removeClass('current');
            }
            $(subItems[i]).parent().addClass('current');
         }
      }
   });

   // size btns click
   let filterBtns = $('.filter__sizes-btn');

   $(filterBtns).on('click', function (event) {
      let target = event.target;

      for (let i = 0; i < filterBtns.length; i++) {
         if (target == filterBtns[i]) {

            for (let j = 0; j < filterBtns.length; j++) {
               $(filterBtns[j]).removeClass('active');
            }
            $(filterBtns[i]).addClass('active');
         }
      }
   });

   // filter btn click

   let filterRangeBtn = $('.filter__range-btn');

   $(filterRangeBtn).on('click', function(){
      $(this).addClass('active');
   });


   // wow
   new WOW().init();


});