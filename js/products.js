$(function () {

   $('.header-top__currency-link.current').on('click', function () {
      $('.header-top__currency-item').toggleClass('open');
      $('.header-top__currency-list').toggleClass('open');
   });

   $('#bar-rating').barrating({
      theme: 'bars-reversed',
      hoverState: false,
      showSelectedRating: false,
      initialRating: 5
   });

   // * Поиск картинок
   let imageBig = $('.product__images').find('img')[0];
   let imagesSmall = $('.product__images-small').find('img');
   let imagesSmallParent = $('.product__images');

   // * Проверка на какую картинку нажали и установка нужного пути
   $(imagesSmallParent).on('click', function (event) {
      let target = event.target;
      let imagePath;

      if (target && $(target).hasClass('product__image-small')) {

         for (let i = 0; i < imagesSmall.length; i++) {

            if (target == imagesSmall[i]) {
               imagePath = '../img/products/sofi-blouse-' + (i + 1) + '.jpg';
            }
         }

         changeImage(imagePath);
      }
   });

// * Вставка большой картинки
   function changeImage(str) {
      imageBig.setAttribute('src', str);
   }

   // * Разворачивание дополнительной информации

   let extraList = $('.product__extra-content-list');
   let itemContent = $('.product__list-item');

   $(extraList).on('click', function (event) {
      let target = event.target;
      
      if (target && $(target).hasClass('product__list-item')) {
         for (let i = 0; i < itemContent.length; i++) {
            if (target == itemContent[i]) {
               $(itemContent[i]).next().toggle('show');    // * Делаем блоки видимыми / невидимыми
            }
         }
      }
   });

});