'use strict';
// Задание: найти самую длинную общую последовательность 2х строк.

var searchCommon = function (one, two) {
	console.log('Первая строка: ' + one);
	console.log('Вторая строка: ' + two);

  var subString = '';
  var str = '';

  for (var j = 0; j <= one.length - 1; j++) {
    str = '';
	for (var i = j; i <= one.length - 1; i++) {
	  str += one[i];
	  if (two.indexOf(str) >= 0 && str.length > subString.length) {
	  subString = str;
	  }
	}
  }
  return subString;
}

console.log('Результат: ' + searchCommon('карась', 'карамбола'));
