$(function () {

   // clothes slider
   $('.clothes-slider__content').slick({
      arrows: true,
      dots: true,
      draggable: false
   });

   // range slider
   $(".slider-range").slider({
      range: true,
      min: 0,
      max: 300,
      values: [0, 300],
      slide: function (event, ui) {
         $(".filter-range").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
   });
   $(".filter-range").val("$" + $(".slider-range").slider("values", 0) +
      " - $" + $(".slider-range").slider("values", 1));

   // filter drop down list
   let categoriesList = $('.filter__categories-list');
   let categoriesItems = $('.filter__categories-item-title');

   $(categoriesList).on('click', function (event) {
      let target = event.target;

      if (target && $(target).hasClass('filter__categories-item-title')) {
         for (let i = 0; i < categoriesItems.length; i++) {
            if (target == categoriesItems[i]) {
               $(categoriesItems[i]).next().slideToggle('open');
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

   $(filterRangeBtn).on('click', function () {
      $(this).addClass('active');
   });

   // filter menu


   // let filterMenu = $('.filter-menu');

   // filterMenu.on('click', function () {

   //    $(filter).slideToggle('500');
   //    $(filter).css('display', 'flex');
   //    $(filterMenu).slideToggle('500');

   // });

   $('.filter-menu').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
         beforeOpen: function () {
            if ($(window).width() < 700) {
               this.st.focus = false;
            } else {
               this.st.focus = '#name';
            }
         }
      }
   });


   $('.filter-menu').on('click', function () {
      $('#filter-pop-up').find('.filter').show('500');
   });

   if (screen.width <= '465') {
      $('.filter-menu').css('background-image', "url('../../img/filter.svg')");
   } else if (screen.width >= '465'){
      $('.filter-menu').css('background-image', "");
   }

   let width = screen.width,
   height = screen.height;

   setInterval(function () {
      if (screen.width !== width || screen.height !== height) {
         width = screen.width;
         height = screen.height;
         $(window).trigger('resolutionchange');
      }
   }, 50);

   $(window).bind('resolutionchange', function () {

      if (screen.width <= '465') {
         $('.filter-menu').css('background-image', "url('../../img/filter.svg')");
      } else if (screen.width >= '465'){
         $('.filter-menu').css('background-image', "");
      }
   });



});