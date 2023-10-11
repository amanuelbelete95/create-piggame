'use strict';
//
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');

// select the button for evenlistener functionality
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

//current score
// we don't want to store the data on user interface or dom;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

score1.textContent = 0;
score2.textContent = 0;
diceEl.classList.add('hidden');

// roll dice functionality;

// generatae the random roll;

// rolling dice functionality to btn roll;
const setDice = function () {
  // generate random dice number
  const dice = Math.trunc(Math.random() * 6) + 1;

  //remove hidden classes from dice;

  diceEl.classList.remove('hidden');
  //display dice
  diceEl.src = `dice-${dice}.png`;

  // check for if one is rolled
  if (dice !== 1) {
    //add the score to the current score of the player
    currentScore += dice;
    // current0El.textContent = currentScore; // change later
    // the dice score should be displayed under the active player when the click event happend
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // if we role dice = 1; we loose our score and switch the player
    //switch the  players
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
};

btnRoll.addEventListener('click', setDice);
