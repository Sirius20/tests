'use strict';
// Задание: сделать функцию сдвига элементов массива вправо на N шагов.

var getMove = function (arr, step) {
  console.log('Входной массив: ' + arr);
  var newArray = arr.concat(arr.splice(0, arr.length - step));
  return console.log('Результат: ' + newArray);
}

getMove([1, 2, 5, 10, 160, 2, 30, 7], 3);
