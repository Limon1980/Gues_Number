'use strict';

// // проверка на число
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

// функция перезапука или окончания игры
const reload = function (game) {
  if (game) {
    console.log(game);
    window.location.reload();
  } else {
    alert('Спасибо за игру, Вы молодец!');
  }
};

const getRand = function () {
  return Math.ceil(Math.random() * 100);
};

function whoNumber() {
  let rand = getRand();
  let n = 10; // колличество попыток
  let game;
  console.log(rand);

  function quest(number = parseFloat(prompt('Угадай число от 1 до 100'))) {
    if (n > 1) {
      if (!isNumber(number)) {
        game = confirm('Введите число. Хотите продолжить?');
        if (!game) {
          return alert('Игра окончена!');
        }
        quest();
      } else {
        n--;
      }

      if (number === rand) {
        game = confirm(
          'Поздравляю, Вы угадали!!! Число ' + rand + ' Хотели бы сыграть еще? '
        );
        reload(game);
      } else if (number < rand) {
        alert('Загадонное число больше! Осталось ' + n + ' попыток');
        quest();
      } else if (number > rand) {
        alert('Загаданное число меньше! Осталось ' + n + ' попыток');
        quest();
      }
    } else {
      game = confirm('Попытки закончились, хотите сыграть еще?');
      reload(game);
    }
  }
  console.dir(quest);
  return quest();
}

whoNumber();
