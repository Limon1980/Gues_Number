'use strict';

// проверка на число
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let rand = Math.ceil(Math.random() * 100);
let number;
let n = 10; // колличество попыток


console.log(rand);


function whoNumber() {



  do {

    number = parseFloat(prompt('Угадай число от 1 до 100'));
    if (!isNumber(number)) {
      alert('Введите число');
    } else {
      n--;
    }

  } while (!isNumber(number));

  if (number === rand) {
    alert('Угадал! Число ' + rand);
  } else if (number < rand) {
    alert('Загадонное число больше! Осталось ' + n + 'попыток');
    whoNumber();
  } else if (number > rand) {
    alert('Загаданное число меньше! Осталось ' + n + 'попыток');
    whoNumber();
  }
}

whoNumber();