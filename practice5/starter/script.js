'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '⚡Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 3;

document.querySelector('.guess').value = 5;
console.log(document.querySelector('.guess').value);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);
});
//SYNTAX---->  addEventListener('event', function());
*/
//GAME LOGIC
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const checkNumber = function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '📛 No Number';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 Correct Answer';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎🏻 You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎🏻 You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', checkNumber);
