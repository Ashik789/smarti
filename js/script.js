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
            $('.whatsupp').addClass('whats-top');
        }
        else {
            $('header').removeClass('header-appear');
            $('.whatsupp').removeClass('whats-top');
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
        dots: false,
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
            800: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    $(".serve-carousel").owlCarousel({
        items: 3,
        margin: 30,
        dots: false,
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
            800: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    $(".slider-carousel").owlCarousel({
        items: 1,
        margin: 30,
        dots: true,
        nav: false,
        loop:true,
        autoplay: true,
        smartSpeed:500,
        autoplayHoverPause:true,
        responsiveClass:true,
    });

    $(".product-carousel").owlCarousel({
        items: 1,
        margin: 0,
        dots: false,
        nav: false,
        loop:true,
        autoplay: true,
        smartSpeed:500,
        autoplayHoverPause:true,
        responsiveClass:true,
    });

    $(".related-carousel").owlCarousel({
        items: 3,
        margin: 30,
        dots: false,
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
                items:4
            },
            800: {
                items: 2
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

    $(function () {
        $(".residential").slice(0, 8).show();
        $("#loadMore").on('click', function (e) {
            e.preventDefault();
            $(".residential:hidden").slice(0, 4).slideDown();
            if ($(".residential:hidden").length == 0) {
                $("#load").fadeOut('slow');
                $('#loadMore').addClass('d-none');
            }
        });
        $(".commercial-box").slice(0, 6).show();
        $("#viewMore").on('click', function (e) {
            e.preventDefault();
            $(".commercial-box:hidden").slice(0, 3).slideDown();
            if ($(".commercial-box:hidden").length == 0) {
                $("#load").fadeOut('slow');
                $('#viewMore').addClass('d-none');
            }
        });
        $(".industries").slice(0, 12).show();
        $("#showMore").on('click', function (e) {
            e.preventDefault();
            $(".industries:hidden").slice(0, 3).slideDown();
            if ($(".industries:hidden").length == 0) {
                $("#load").fadeOut('slow');
                $('#showMore').addClass('d-none');
            }
        });
    });
