'use strict';

// // проверка на число
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let game;
const reload = function (game) {
  if (game) {
    console.log(game);
    window.location.reload();
  } else {
    alert('Спасибо за игру, Вы молодец!');
  }
};

function whoNumber() {
  let rand = Math.ceil(Math.random() * 100);

  console.log(rand);

  function quest(number = parseFloat(prompt('Угадай число от 1 до 100'))) {
    if (!isNumber(number)) {
      game = confirm('Введите число. Хотите продолжить?');
      if (!game) {
        return alert('Игра окончена!');
      }
      quest();
    }

    if (number === rand) {
      game = confirm(
        'Поздравляю, Вы угадали!!! Число ' + rand + ' Хотели бы сыграть еще? '
      );
      reload(game);
    } else if (number < rand) {
      alert('Загадонное число больше!');
      quest();
    } else if (number > rand) {
      alert('Загаданное число меньше!');
      quest();
    }
  }
  console.dir(quest);
  return quest();
}

whoNumber();
