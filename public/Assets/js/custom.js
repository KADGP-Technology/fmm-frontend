$(document).ready(function () {

  $(document).on('click', '.menu-icon', function () {
    $('.mobile-menu-drawer').toggleClass('active');
    $('body').toggleClass('opened-drawer');
    $('.menu-overlay').toggleClass('overlay-active');
  });

  $(document).on('click', '.close-menu', function () {
    $('.mobile-menu-drawer').removeClass('active');
    $('body').removeClass('opened-drawer');
    $('.menu-overlay').removeClass('overlay-active');
  });

  // $(document).on('click', '.upload-image', function() {
  //   $('.image-model').toggleClass('opened');
  //   $('body').toggleClass('opened-drawer');
  // });

  //   $(document).on('click', '.close-model', function() {
  //     $('.image-model').removeClass('opened');
  //     $('body').removeClass('opened-drawer');
  // });

  $(document).on('click', '.filter-section .heading-section', function () {
    var selected = $(this).next('.content-section');
    if (selected.is(':hidden')) {
      $(this).next('.content-section').slideDown('fast');
      $(this).toggleClass('active');
    } else {
      $(this).next('.content-section').slideUp('fast');
      $(this).toggleClass('active');
    }
  });

  var heroSlider = new Swiper(".main-hero-slider", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });

  var artistsSlider = new Swiper(".main-artists-slider", {
    slidesPerView: 4,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 4000
    },
    breakpoints: {
      200: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      991: {
        slidesPerView: 4
      }
    }
  });

  var blogSlider = new Swiper(".blog-slider-section", {
    slidesPerView: 2.3,
    grabCursor: true,
    spaceBetween: 103,
    // loop: true,
    // autoplay: {
    //   delay: 4000
    // },
    breakpoints: {
      200: {
        slidesPerView: 1.3,
        spaceBetween: 30,
      },
      600: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      850: {
        slidesPerView: 2.3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2.3
      }
    }
  });

  function resizeFun() {
    $('.answer-wrapper').each(function (index) {
      var contentHeight = $(this).innerHeight();
      $(this).parent('.bottom-wrapper').css('height', contentHeight)
    });
  }
  resizeFun();

  $(window).resize(function () {
    resizeFun();
  });

  $(document).on('click', '.top-wrapper', function () {
    if (!$(this).parent().hasClass('top-click')) {
      resizeFun();
    }
    $(this).parent().toggleClass('top-click').parents().siblings().children().removeClass('top-click');
  });

});

$(function () {
  $("#slider-range").slider({
    range: true,
    min: 130,
    max: 500,
    values: [130, 250],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  $("#amount").val("$" + $("#slider-range").slider("values", 0) +
    " - $" + $("#slider-range").slider("values", 1));
});