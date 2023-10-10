'use strict';
//
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');

const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

//current score
// we don't want to store the data on user interface or dom;
let currentScore = 0;
console.log(currentScore, typeof currentScore);

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
  /*switch (dice) {
    case 1:
      diceEl.src = 'dice-1.png';
      break;

    case 2:
      diceEl.src = 'dice-2.png';
      break;
    case 3:
      diceEl.src = 'dice-3.png';
      break;
    case 4:
      diceEl.src = 'dice-4.png';
      break;
    case 5:
      diceEl.src = 'dice-5.png';
      break;
    case 6:
      diceEl.src = 'dice-6.png';
      break;
    default:
      diceEl.src = '';
  }
  */
  // check for if one is rolled
  if (dice !== 1) {
    //add the score to the current score of the player
    currentScore += dice;
    current0El.textContent = currentScore; // change later
  } else {
    //switch the  players
  }
};

btnRoll.addEventListener('click', setDice);
