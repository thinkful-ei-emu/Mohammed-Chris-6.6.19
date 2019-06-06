/* eslint-disable indent */
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


function finalResults() {
  $('#number-chooser').submit(event => {
    event.preventDefault();
    $('.js-results').empty();
    const userNum = $('#number-choice').val();

    const fBResults = [];
    for(let i = 1; i <= userNum; i++){
      fBResults.push(fizzbuzz(i));
    }
    fBResults.forEach(item => {
     // eslint-disable-next-line indent
     $('.js-results').append(`<div><span class = 'fizz-buzz-item ${item}'>${item}</span></div>`); 
    });
    // const html = fBResults;
    // $('.js-results').html(html);
    // console.log(html);

  });
}

$(finalResults);
