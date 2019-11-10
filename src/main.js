$(document).ready(function () {

    console.log('YEP');

    /*fix header*/

    var header = $("#header-top"),
        burger = $(".header-inner__top-burger"),
        introH = $("#headering").innerHeight(),
        scroll = 0;

    var wWindow = $(window).width();

    $(window).on("scroll", function () {

        scroll = $(this).scrollTop();
        if (scroll >= introH && wWindow >= 768) {
            header.addClass("fixed");}
        else {
          header.removeClass("fixed");
        }

      if (scroll >= introH && wWindow < 768) {
        burger.addClass("fixed");
        burger.css("padding-left", "15px");}
      else {
        burger.removeClass("fixed");
        burger.css("padding-left", "0");
    }

    });


    if (wWindow < 768) {

      $('.header-top a').on('click', function () {

        $('.header-top').fadeOut();

        $('.header-inner__top-burger').fadeIn();

      });

    }

    /*smooth scroll*/

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        });

    });

    /*how-choose item click*/

    $('.how-choose__item-box').on('click', function (e) {
        event.preventDefault(e);

      //$('.how-choose__item-box_after_click').fadeOut();

      //$(this).closest('.how-choose__item').find('.how-choose__item-box_after').addClass('how-choose__item-box_after_click');

      $('.how-choose__item-box_after_click').removeClass('how-choose__item-box_after_click');

      var howChoose_boxAfter = $(this).closest('.how-choose__item').find('.how-choose__item-box_after');
      howChoose_boxAfter.addClass('how-choose__item-box_after_click');


    });

    /*header top mobile*/

    $('.header-inner__top-burger').on('click', function (e) {
        $('.header-top').fadeIn();

        $('.header-inner__top-burger').fadeOut();
    });


    $('.header-top__close').on('click', function () {
        $('.header-top').fadeOut();

        $('.header-inner__top-burger').fadeIn();

    });

    /*packages form-call*/

    $('.btn.btn-packages').on('click', function (e) {
        event.preventDefault(e);
        var titleAtr = $(this).closest('.packages-item').find('.packages-item__title').text();
        console.log(titleAtr);
        $(".packages-form-title").val(titleAtr);
        $('.form-call').fadeIn();
    });

    $('.def-form__back, .def-form__close').on('click', function () {
        $('.form-call').fadeOut();
    });



//  FORM ON check

    $('.def-form label input').on('click', function () {

        $(this).closest('label').toggleClass('on');

    });

//  FORM OFF

    /*input mask tel*/

    $("#phone1").mask("+7 (999)999-99-99");
    $("#phone2").mask("+7 (999)999-99-99");

    ///////////////////////////////////////////////////////////////////////////

  $('.your-class').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      centerMode: true,
      variableWidth: true,
      asNavFor: '.my-class',

      slidesPerRow: 3,
      focusOnSelect: true,

      responsive: [
          {
              breakpoint: 0,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2
              }
          },
      ]

  });

  $('.my-class').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.your-class',
      focusOnSelect: true,

      arrows: true,
      fade: true,

      responsive: [
      {
        breakpoint: 0,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
        }
      },
    ]

  });

    /*requests slider form*/

    $('.btn-requests').on('click', function () {
        $('.request-scan').fadeIn();

        $('.my-class').slick('setPosition');

    });

    $('.request-scan__back, .request-scan__close').on('click', function () {
        $('.request-scan').fadeOut();
    });


});
