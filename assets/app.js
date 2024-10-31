$(document).ready(function(){
    $('.trending-item').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    });

    jQuery('.stellarnav').stellarNav({
        breakpoint: 991
    });

    // Post Area Slider
    var Slider5 = jQuery('.post-slider');
    Slider5.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fas fa-angle-right"></i></span>',
        speed: 1000,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
        ]
    });
});