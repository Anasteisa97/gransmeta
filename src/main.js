$(document).ready(function () {

    console.log('YEP');

    /*fix header*/

    var header = $("#header-top"),
        introH = $("#headering").innerHeight(),
        scroll = 0;


    $(window).on("scroll", function () {

        scroll = $(this).scrollTop();
        if (scroll >= introH)
            header.addClass("fixed");
        else header.removeClass("fixed");

    });

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

        $(this).closest('.how-choose__item').find('.how-choose__item-box_after').toggleClass('how-choose__item-box_after_click');

        //$(this).toggleClass('how-choose__item-box_after');
        // $('.how-choose__item-box_after').toggleClass('how-choose__item-box_after_click');
        //$('.how-choose__item-box:before').css('background','#f8484f');
    });

    /*header top mobile*/

    $('.header-inner__top-close').on('click', function (e) {
        $('.header-top').fadeIn();
    });
    $('.header-top__close').on('click', function () {
        $('.header-top').fadeOut();
    });

    /*packages form-call*/

    $('.btn.btn-packages').on('click', function (e) {
        event.preventDefault(e);
        $('.form-call').fadeIn();
    });

    $('.def-form__back, .def-form__close').on('click', function () {
        $('.form-call').fadeOut();
    });

    /*requests slider form*/

    $('.btn.btn-requests').on('click', function (e) {
        event.preventDefault(e);
        $('.request-scan').fadeIn();
    });

    $('.request-scan__back, .request-scan__close').on('click', function () {
        $('.request-scan').fadeOut();
    });


//  FORM ON check

    $('.def-form label input').on('click', function () {

        $(this).closest('label').toggleClass('on');

    });

//  FORM OFF

    /*input mask tel*/

    $("#phone1").mask("+7 (999)999-99-99");
    $("#phone2").mask("+7 (999)999-99-99");

    /*owl synh*/

    var sync11 = $("#owl-carousel-1");
    var sync22 = $("#owl-carousel-2");
    var slidesPerPage = 3; //globaly define number of elements per page
    var syncedSecondary = true;

    $(sync11).owlCarousel({

        loop: true,
        nav: true,
        dots: false,
        center: true,
        /*autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,*/
        slideBy: 2,
        stagePadding: 0,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
        }
    });

    $(sync22).owlCarousel({

        loop: true,
        nav: true,
        dots: false,
        items: 1,
        slideBy: 1,
        responsive: {
            0: {
                nav: false
            },
            768: {
                nav: true
            },
        }
    });

    //////////////// из codepen//////////////


    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        //autoplay: true,
        dots: true,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(4).addClass("current");
        })
        .owlCarousel({
            items: 3,
            center: true,
            dots: true,
            nav: true,
            loop: true,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 2, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line


        //var current = el.item.index;


        var currentfrom = el.item.index;

        if (currentfrom >= 4) {
            current = currentfrom - 4;
        }
        if (currentfrom < 4) {
            current = currentfrom + 4;
        }

        //var current = sync2.find('.owl-item.active.center').first().index();

        //if you disable loop you have to comment this block

        /*
       var count = el.item.count-1;
       var current = Math.round(el.item.index - (el.item.count/2) - .5);

       if(current < 0) {
         current = count;
       }
       if(current > count) {
         current = 0;
       }*/

        //end block

        /*var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

         if (current > end) {
           sync2.data('owl.carousel').to(current-4, 100, true);
         }
         if (current < start) {
           sync2.data('owl.carousel').to(current+4, 100, true);
         }*/

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        /*var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();*/

        /* if (current > end) {
           sync2.data('owl.carousel').to(current-4, 100, true);
         }
         if (current < start) {
           sync2.data('owl.carousel').to(current+4, 100, true);
         }*/

        sync2.data('owl.carousel').to(current, 100, true);

    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number;
            if(el.item.index < 4) {
               number = el.item.index + 4;
            }
            if(el.item.index >= 4) {
                number = el.item.index - 4;
            }
            //var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();

        if(number < 4) {
            number += 4;
        }
        if(number >= 4) {
            number -= 4;
        }

        sync1.data('owl.carousel').to(number, 300, true);
    });

    ///////////////////////////////////////////////////////////////////////////


  $('.btn.btn-requests-two').on('click', function (e) {
    event.preventDefault(e);
    $('.request-scan-two').fadeIn();
  });

  $('.request-scan-two__back, .request-scan-two__close').on('click', function () {
    $('.request-scan-two').fadeOut();
  });

  var sync_one = $("#owl-carousel-one");
  var sync_two = $("#owl-carousel-two");
  var slidesPerPage = 3; //globaly define number of elements per page
  var syncedSecondary = true;

  sync_one.owlCarousel({

    slideSpeed: 2000,
    nav: true,
    //autoplay: true,
    dots: true,
    loop: true,
    responsiveRefreshRate: 200,

    center: true,
    /*autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,*/
    slideBy: 2,
    stagePadding: 0,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
    }
  }).on('changed.owl.carousel', syncPositionOne);

  sync_two
    .on('initialized.owl.carousel', function () {
      sync_two.find(".owl-item").eq(4).addClass("current");
    })
    .owlCarousel({

      center: true,
      nav: true,
      loop: true,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: 2, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100,

    dots: false,
    items: 1,
    responsive: {
      0: {
        nav: false
      },
      768: {
        nav: true
      },
    }
  }).on('changed.owl.carousel', syncPositionTwo);

  function syncPositionOne(el) {
    //if you set loop to false, you have to restore this next line

    var currentfrom = el.item.index;

    if (currentfrom >= 4) {
      current = currentfrom - 4;
    }
    if (currentfrom < 4) {
      current = currentfrom + 4;
    }

    //end block

    sync_two
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");

    sync_two.data('owl.carousel').to(current, 100, true);

  }

  function syncPositionTwo(el) {
    if (syncedSecondary) {
      var number;
      if(el.item.index < 4) {
        number = el.item.index + 4;
      }
      if(el.item.index >= 4) {
        number = el.item.index - 4;
      }
      //var number = el.item.index;
      sync_one.data('owl.carousel').to(number, 100, true);
    }
  }

/*  sync_two.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();

    if(number < 4) {
      number += 4;
    }
    if(number >= 4) {
      number -= 4;
    }

    sync_one.data('owl.carousel').to(number, 300, true);
  });*/

  sync_two.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();

    if(number < 4) {
      number += 4;
    }
    if(number >= 4) {
      number -= 4;
    }

    sync_one.data('owl.carousel').to(number, 300, true);
  });


});
