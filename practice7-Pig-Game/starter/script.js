'use strict';

//slecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const current0El = document.querySelector('#current--0');
const score1El = document.querySelector('#score--1');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generate a random Dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3.Check for rolled 1: if true
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to next player
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    //changing color to the switched player
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  document.querySelector(`score--${activePlayer}`).textContent = currentScore;
  // 1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`current--${activePlayer}`).textContent =
    scores[activePlayer];
  // 2. Check if player's score is >=100 if true finish the game
});
