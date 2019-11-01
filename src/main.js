$(document).ready(function () {

  console.log('YEP');

  /*fix header*/

  var header = $("#header-top"),
    introH = $("#headering").innerHeight(),
    scroll = 0;


  $(window).on("scroll", function(){


    scroll = $(this).scrollTop();
    if(scroll >= introH)
      header.addClass("fixed");
    else header.removeClass("fixed");

  });

  /*smooth scroll*/

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var blockId = $(this).data('scroll'),
      blockOffset = $(blockId).offset().top;

    $("html, body").animate({
      scrollTop: blockOffset
    });

  });

  $('.how-choose__item-box').on('click', function(e) {
    event.preventDefault(e);

    $(this).closest('.how-choose__item').find('.how-choose__item-box_after').toggleClass('how-choose__item-box_after_click');

    //$(this).toggleClass('how-choose__item-box_after');
    // $('.how-choose__item-box_after').toggleClass('how-choose__item-box_after_click');
    //$('.how-choose__item-box:before').css('background','#f8484f');
  });

  $('.header-inner__top-close').on('click', function (e) {
    $('.header-top').fadeIn();
  });
  $('.header-top__close').on('click', function () {
    $('.header-top').fadeOut();
  });

  $('.btn.btn-packages').on('click', function (e) {
    event.preventDefault(e);
    $('.form-call').fadeIn();
  });

  $('.def-form__back, .def-form__close').on('click', function () {
    $('.form-call').fadeOut();
  });

  $('.btn.btn-requests').on('click', function (e) {
    event.preventDefault(e);
    $('.request-scan').fadeIn();
  });

  $('.request-scan__back, .request-scan__close').on('click', function () {
    $('.request-scan').fadeOut();
  });



  $("#owl-carousel-1").owlCarousel({

    loop: true,
    nav: true,
    dots: false,
    center: true,
    /*autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,*/
    slideBy: 2,
    stagePadding: 0,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:3
      },
    }
  });

  $("#owl-carousel-2").owlCarousel({

    loop: true,
    nav: true,
    dots: false,
    items:1,
    responsive:{
      0:{
        nav: false
      },
      768:{
        nav: true
      },
    }
  });


//  FORM ON

  $('.def-form label input').on('click', function () {

    $(this).closest('label').toggleClass('on');

  });

//  FORM OFF


});
