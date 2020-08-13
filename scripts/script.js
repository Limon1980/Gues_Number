'use strict';

// проверка на число
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let rand = Math.ceil(Math.random() * 100);
let number;
let n = 5; // колличество попыток
let game;
const reload = function (game) {
  if (game) {
    console.log(game);
    window.location.reload();
  } else {
    alert('Спасибо за игру, Вы молодец!');
  }
};


console.log(rand);


function whoNumber() {


  number = parseFloat(prompt('Угадай число от 1 до 100'));
  if (!isNumber(number)) {
    alert('Введите число');
    whoNumber();
  } else {
    n--;
  }

  if (n > 0) {
    if (number === rand) {
      game = confirm('Поздравляю, Вы угадали!!! Число ' + rand + ' Хотели бы сыграть еще? ');
      reload(game);
    } else if (number < rand) {
      alert('Загадонное число больше! Осталось ' + n + ' попыток');
      whoNumber();
    } else if (number > rand) {
      alert('Загаданное число меньше! Осталось ' + n + ' попыток');
      whoNumber();
    }
  } else {
    game = confirm('Попытки закончились, хотите сыграть еще?');
    reload(game);
  }
}

whoNumber();