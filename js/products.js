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

   let imageBig = $('.product__images').find('img')[0];
   // let imagesSmall = $('.product__images-small').find('img');
   let imagesSmall = document.querySelectorAll('.product__image-small');
   let imagesSmallParent = $('.product__images');

   console.log(imageBig);
   console.log(imagesSmall);
   

   $(imagesSmallParent).on('click', function (event) {
      let target = event.target;
      let imagePath;

      if (target && $(target).hasClass('product__image-small')) {

         for (let i = 0; i < imagesSmall.length; i++) {

            if (target == imagesSmall[i]) {
               imagePath = '../img/products/sofi-blouse-' + (i + 1) + '.jpg';
               console.log('vot' + imagesSmall[i]);

            }
         }
         
         changeImage(imagePath);
      }
   });


   function changeImage(str) {
      imageBig.setAttribute('src', str);
   }

});