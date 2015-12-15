//*** Day 3 Exercise 1 and 2 ***
var crypto = require('crypto');

var md5Hash = function (key, match) {
  var number = 0;
  var hash = '';

  while (hash.indexOf(match) !== 0) {
    var data = key + number.toString();
    var hash = require('crypto').createHash('md5').update(data).digest('hex');
    number += 1;
  }
  return number - 1;
}

var input = 'ckczppom';

console.log('Starting w/ 00000:', md5Hash(input, '00000'));
console.log('Starting w/ 000000:', md5Hash(input, '000000'));