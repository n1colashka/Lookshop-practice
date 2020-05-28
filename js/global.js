$(function () {

   'use strict';

   $('.header-top__currency-link.current').on('click', function () {
      $('.header-top__currency-item').toggleClass('open');
      $('.header-top__currency-list').toggleClass('open');
   });


   // wow
   new WOW().init();

   // burger-menu

   let menuContainer = $('.burger-menu__inner'),
      menuList = $('.burger-menu').find('.main-navigation__list'),
      subLists = $('.burger-menu').find('.main-navigation__sublist'),
      menuItems = $('.burger-menu').find('.main-navigation__item-link');


   $(menuContainer).on('click', function (event) {
      $(menuList).slideToggle('hide');
   });

   $(menuItems).on('click', function (event) {
      let target = event.target;

      for (let i = 0; i < menuItems.length; i++) {
         if (target && target == menuItems[i]) {
            for (let j = 0; j < menuItems.length; j++) {
               if (j != i) {
                  $(subLists[j]).hide("blind", {
                     direction: "up"
                  }, 500);
               }
            }
            $(subLists[i]).slideToggle('500');
         }
      }
   });

   // footer burger

   let footerMenuLine = $('.footer-menu__line-wrapper'),
      footerMenu = $('.footer-menu__list'),
      footerMenuClose = $('.footer-menu__close'),
      footerMenuItems = $('.footer-menu__link');

   $(footerMenuLine).on('click', function (event) {
      $(footerMenu).toggle('drop', {
         direction: 'down'
      }, 350);
   });

   $(footerMenuClose).on('click', function (event) {
      $(footerMenu).toggle('drop', {
         direction: 'down'
      }, 350);
   });





   // adaptive

   if (screen.width <= '742') {
      $(".slider__item").css("background-image", "");
      let linkClicked;
      $(".main-navigation__list .main-navigation__item").on("click", function (event) {
         if (linkClicked !== this) {
            linkClicked = this;
            event.preventDefault();
         }
      });
   }




});