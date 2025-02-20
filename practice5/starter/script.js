'use strict';

//GAME LOGIC
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const checkNumber = function () {
  const guess = Number(document.querySelector('.guess').value);

  //playSound function for all sounds
  const playSound = className => {
    const audio = document.querySelector(className);
    audio.play();
  };

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number';
    document.querySelector('.guess').style.backgroundColor = '#cf0000';
    // Play the sound:
    playSound('.noNumberSound');
    //-------------------------------------------------

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 Correct Answer';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#2dde12';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.guess').style.backgroundColor = '';
    //hightscore logic
    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;

    // Play the sound:
    playSound('.winSound');
    //-------------------------------------------------

    //when guess is wrong
  } else if (guess !== secretNumber) {
    document.querySelector('.guess').style.backgroundColor = '';
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High' : '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎🏻 You Lost the game!';
      document.querySelector('body').style.backgroundColor = '#cf0000';
      document.querySelector('.score').textContent = 0;
      // Play the sound:
      playSound('.lostSound');
      //-------------------------------------------------
    }
  }
};
//the above function for this line
document.querySelector('.check').addEventListener('click', checkNumber);

//Creating the game reset functionality. when ever the user clicks the again button it loads the new game
const resetGame = function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').style.backgroundColor = '';
  document.querySelector('.guess').value = null;

  // Play the sound:
  const newGame = document.querySelector('.newGame');
  newGame.play();
  //-------------------------------------------------
};
document.querySelector('.again').addEventListener('click', resetGame);
