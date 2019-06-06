'use strict';

$('.thumbnail img').on ('click', function() {
//   var clickedImg = $(this).find('img').clone();
//   var heroImg = $('.hero').find('img');

  //   heroImg.replaceWIth(clickedImg);
  $('.hero img').attr('src',$(this).attr('src').replace('thumbnail','large'))
  $('.hero img').attr('alt',$(this).attr('alt').replace('thumbnail','large'));
  //   heroImg.prop('src', clickedImg.prop('src'));

//   heroImg.prop('alt', clickedImg.prop('alt'));
});
  