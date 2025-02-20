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
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const checkNumber = function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '📛 No Number';
    // Play the sound:
    const noNumberSound = document.querySelector('.noNumberSound');
    noNumberSound.play();
    //-------------------------------------------------

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 Correct Answer';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#2dde12';
    document.querySelector('.number').style.width = '30rem';
    //hightscore logic
    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;

    // Play the sound:
    const winSound = document.querySelector('.winSound');
    winSound.play();
    //-------------------------------------------------
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎🏻 You Lost the game!';
      document.querySelector('body').style.backgroundColor = '#cf0000';
      document.querySelector('.score').textContent = 0;
      // Play the sound:
      const lostSound = document.querySelector('.lostSound');
      lostSound.play();
      //-------------------------------------------------
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎🏻 You Lost the game!';
      document.querySelector('body').style.backgroundColor = '#cf0000';
      document.querySelector('.score').textContent = 0;
      // Play the sound:
      const lostSound = document.querySelector('.lostSound');
      lostSound.play();
      //-------------------------------------------------
    }
  }
};
//the above function for this line
document.querySelector('.check').addEventListener('click', checkNumber);

//Creating the game reset functionality. when ever the user clicks the againbutton it loads the new game
const resetGame = function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = null;

  // Play the sound:
  const newGame = document.querySelector('.newGame');
  newGame.play();
  //-------------------------------------------------
};
document.querySelector('.again').addEventListener('click', resetGame);
