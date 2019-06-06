'use strict';
/* eslint-env jquery*/

function fizzbuzz(num) {
  if (num % 15 === 0) {
    return 'fizzbuzz';
  }
  else if (num % 5 === 0) {
    return 'buzz';
  }
  else if (num % 3 === 0) {
    return 'fizz';
  }
  else {
    return num;
  }
}

$(function() {
  $('#number-chooser').submit(event => {
    event.preventDefault();
    $('.js-results').empty();
    const userNum = $(event.currentTarget).find('#number-choice');

    const fBResults = [];
    for(let i = 1; i <= userNum; i++){
      fBResults.push(fizzbuzz(i));
    }
    const html = fBResults;
    $('.js-results').html(html);
  });
});
