$(document).ready (() => {
    $('.slider-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        centerMode: true,
    });

    $( function() {
        $( ".faq-content-accordion" ).accordion({
            collapsible: true,
            active: false,
            icons: false,
            heightStyle: 'content',
        });
    });

    $('.burger, .burger>svg, .burger>rect').click(() => {
        $('.menu').addClass('open-menu');
        $('.close-menu').show();
        $('.close-menu').click(() => {
            $('.menu').removeClass('open-menu');
            $('.close-menu').hide();
        });
    });

    $('.news-content').slick({
        responsive: [
            {
                breakpoint: 100000,
                settings: "unslick"
            },
            {
                breakpoint: 426,
                settings: {
                    arrows: false,
                    dots: false,
                    infinite: true,
                    slidesToScroll: 1,
                    variableWidth: true,
                    mobileFirst: true,
                    swipeToSlide: true,
                    autoplay: true,
                    autoplaySpeed: 1500
                }
            }
        ]
    });
})