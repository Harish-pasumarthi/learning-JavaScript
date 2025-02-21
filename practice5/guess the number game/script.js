'use strict';

//GAME LOGIC
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//playSound function for all sounds
const playSound = className => {
  const audio = document.querySelector(className);
  audio.play();
};
//displayMessage function for .message class eg:high, low, no number etc.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//function checks the guess number correct or wrong
const checkNumber = function () {
  const guess = Number(document.querySelector('.guess').value);
  //When there is no input
  if (!guess) {
    displayMessage('🚫 No Number');
    document.querySelector('.guess').style.backgroundColor = '#cf0000';
    playSound('.noNumberSound'); // Play the sound
    //when the guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🏆 Correct Answer');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#2dde12';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.guess').style.backgroundColor = '';
    //hightscore logic
    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    playSound('.winSound'); // Play the sound:
    //when guess is wrong
  } else if (guess !== secretNumber) {
    playSound('.wrongGuess');
    document.querySelector('.guess').style.backgroundColor = '';
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('👎🏻 You Lost the game!');
      document.querySelector('body').style.backgroundColor = '#cf0000';
      document.querySelector('.score').textContent = 0;
      playSound('.lostSound'); // Play the sound:
    }
  }
};
//Click event for the button(check)
document.querySelector('.check').addEventListener('click', checkNumber);
//Enter key event for the entire document
document.querySelector('.guess').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    checkNumber();
  }
});

//Creating the game reset functionality. when ever the user clicks the again button it loads the new game
const resetGame = function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').style.backgroundColor = '';
  document.querySelector('.guess').value = null;
  playSound('.newGame'); // Play the sound:
};
document.querySelector('.again').addEventListener('click', resetGame);
