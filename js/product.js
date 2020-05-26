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
    let imageName = ['sofi-blouse'];

    // * Проверка на какую картинку нажали и установка нужного пути

    $(imagesSmallParent).on('click', function (event) {
        let target = event.target;
        let imagePath;

        if (target && $(target).hasClass('product__image-small')) {

            for (let i = 0; i < imagesSmall.length; i++) {

                if (target == imagesSmall[i]) {
                    imagePath = '../img/products/' + imageName[0] + '-' + (i + 1) + '.jpg';
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
                    $(itemContent[i]).next().toggle('show'); // * Делаем блоки видимыми / невидимыми
                }
            }
        }
    });

    // * Подсчет количества покупаемой одежды

    let btnPlus = $('.product__count-btn-plus'),
        btnMinus = $('.product__count-btn-minus'),
        counter = document.querySelector('.product__counter'),
        sum = counter.textContent;

    
    $(btnPlus).on('click', function () {
        if (sum < 10) {
            sum++;
        }
        counter.textContent = sum;
    });
    $(btnMinus).on('click', function () {
        if (sum > 1) {
            sum--;
        }
        counter.textContent = sum;
    });

    // wow
    new WOW().init();
});