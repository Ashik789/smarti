jQuery(window).on("load", function () {
    "use strict";

    /*  ===================================
     Loading Timeout
     ====================================== */
    $("#loader-fade").fadeOut(800);
});

jQuery(function ($) {
    "use strict";

    var $window = $(window);
    var windowsize = $(window).width();

    /* ===================================
       Nav Scroll
       ====================================== */

    $(".scroll").on("click", function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 40}, 1100);
    });
    /* ====================================
       Nav Fixed On Scroll
       ======================================= */

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 50) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });
  
    /* =====================================
       Wow
       ======================================== */

    if ($(window).width() > 767) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }


    /* ===================================
       Owl Carousel
       ====================================== */

    $(".solution-carousel").owlCarousel({
        items: 3,
        margin: 30,
        dots: true,
        nav: true,
        navText: [
            "<i class='fas fa-long-arrow-alt-left'></i>",
            "<i class='fas fa-long-arrow-alt-right'></i>"
        ],
        loop:true,
        autoplay: true,
        smartSpeed:500,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive: {
            992: {
                items:3
            },
            600: {
                items: 1
            },
            320: {
                items: 1
            }
        }
    });

    $(".serve-carousel").owlCarousel({
        items: 3,
        margin: 30,
        dots: true,
        nav: true,
        navText: [
            "<i class='fas fa-long-arrow-alt-left'></i>",
            "<i class='fas fa-long-arrow-alt-right'></i>"
        ],
        loop:true,
        autoplay: true,
        autoplaySpeed:2000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive: {
            992: {
                items:4
            },
            600: {
                items: 1
            },
            320: {
                items: 1
            }
        }
    });

    

});


// popup  //
var imaggepoppup = $(".image-popup");
imaggepoppup.length && $(".image-popup").magnificPopup({
    type: "image",
    callbacks: {
        beforeOpen: function() {
            this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure animated zoomIn")
        }
    },
    gallery: {
        enabled: !0
    }
});
var popupyoutube = $(".popup-youtube");
popupyoutube.length && $(".popup-youtube").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: true
    });