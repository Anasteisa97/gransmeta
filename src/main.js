$(document).ready(function () {

  console.log('YEP');

  $('.how-choose__item-box').on('click', function(e) {
    event.preventDefault(e);

    $(this).closest('.how-choose__item').find('.how-choose__item-box_after').toggleClass('how-choose__item-box_after_click');

    //$(this).toggleClass('how-choose__item-box_after');
    // $('.how-choose__item-box_after').toggleClass('how-choose__item-box_after_click');
    //$('.how-choose__item-box:before').css('background','#f8484f');

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
    //center: true,
    items:1
  });


});
