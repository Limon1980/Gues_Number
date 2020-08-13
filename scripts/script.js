'use strict';

// проверка на число
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let rand = Math.ceil(Math.random() * 100);
let number;



console.log(rand);


function whoNumber() {

  do {

    number = parseFloat(prompt('Угадай число от 1 до 100'));
    if (!isNumber(number)) {
      alert('Это не число!');
    }

  } while (!isNumber(number));

  if (number === rand) {
    alert('Угадал! Число ' + rand);
  } else if (number < rand) {
    alert('Загадонное число больше!');
    whoNumber();
  } else if (number > rand) {
    alert('Загаданное число меньше!');
    whoNumber();
  }
}

whoNumber();