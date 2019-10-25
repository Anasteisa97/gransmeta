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

});
