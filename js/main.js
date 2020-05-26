$(function () {

    'use strict';

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
        slidesToShow: 7,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '85px',
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
        // adaptiveHeight: true 
    });

    $(".owl-carousel").owlCarousel({
        items: 8,
        loop: true,
        margin: 40,

        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 5
            },
            1000: {
                items: 6
            },
            1400: {
                items: 8
            }
        }
    });


    $('.header-top__currency-link.current').on('click', function () {
        $('.header-top__currency-item').toggleClass('open');
        $('.header-top__currency-list').toggleClass('open');
    });

    // tabs

    let tab = document.querySelectorAll('.products__tab'),
        info = document.querySelector('.products__tabs'),
        tabContent = document.querySelectorAll('.products__tab-content');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;

        if (target && target.classList.contains('products__tab')) {
            for (let i = 0; i < tab.length; i++) {

                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    for (let i = 0; i < tab.length; i++) {
                        tab[i].classList.remove('current');
                    }
                    tab[i].classList.add('current');
                    break;
                }

            }
            // $(".products__slider").slick('reinit');
            $(".products__slider").slick('slickSetOption', 'adaptiveHeight', true, true);
        }
    });

    // /tabs

    // wow
    new WOW().init();


});