

jQuery(function($) {

  $(document).ready(function () {

    console.log('YEP');

    

  });

});


$('.how-choose__item-box').on('click', function (e) {
  e.preventDefault;
  //$(this).toggleClass('how-choose__item-box_after');
  $('.how-choose__item-box_after').toggleClass('how-choose__item-box_after_click');
  $('.how-choose__item-box:before').css('background','#f8484f');

});


