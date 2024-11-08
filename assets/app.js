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
    var post_area = jQuery('.post-slider');
    post_area.slick({
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

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<span class="prev"><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="next"><i class="fas fa-angle-right"></i></span>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                arrows: false,
            }
        },
    ]
});

//===== BRAND SLICK SLIDER

var feature_post = jQuery('.feature-post-slider');
feature_post.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<span class="prev"><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="next"><i class="fas fa-angle-right"></i></span>',
    speed: 1000,
    responsive: [
        {
            breakpoint: 1140,
            settings: {
                slidesToShow: 3,
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


// Trading News Slider
var trending_slider = jQuery('.trending-news-slider');
trending_slider.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
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
                slidesToShow: 1,
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

// Most View Trending Slider
var most_view_slider = jQuery('.trending-sidebar-slider');
most_view_slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<span class="prev"><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="next"><i class="fas fa-angle-right"></i></span>',
    speed: 1000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1,
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

var center_post = jQuery('.center-play-slider');
center_post.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<span class="prev"><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="next"><i class="fas fa-angle-right"></i></span>',
    speed: 1000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1,
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

// Preloader logic based on real-time network speed
const preloader = document.getElementById("preloader");
const loaderProgress = document.getElementById("loaderProgress");
const loaderText = document.getElementById("loaderText");

// Set overflow hidden to body to prevent scrolling during preloader
document.body.style.overflow = "hidden";

let progress = 0;

// Simulate loading process
const interval = setInterval(() => {
    // Increment progress
    progress += Math.random() * 10; // Adjust speed based on requirement

    // Set the width and text based on progress
    loaderProgress.style.width = `${Math.min(progress, 100)}%`;
    loaderText.textContent = `Loading... ${Math.floor(Math.min(progress, 100))}%`;

    // When loading is complete
    if (progress >= 100) {
        clearInterval(interval);

        // Fade out the preloader
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

        // Enable scrolling by setting overflow back to auto
        document.body.style.overflow = "auto";
    }
}, 100); // Adjust speed as per requirement (in milliseconds)

// Go to Top

// Scroll Event
$(window).on('scroll', function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $('.go-top').addClass('active');
    if (scrolled < 300) $('.go-top').removeClass('active');
});

// Click Event
$('.go-top').on('click', function () {
    $("html, body").animate({
        scrollTop: "0"
    }, 1200);
});
