'use strict';
//

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
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

// also inital condition;

// hide the dice at the beginning of the game.

//intializie the game;
let scores, currentScore, activePlayer, playing;
const initGame = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score1.textContent = 0;
  score2.textContent = 0;
  //set current score;
  current0El.textContent = 0;
  current1El.textContent = 0;
  // reset the class of the game;
  diceEl.classList.add('hidden');
  player1El.classList.remove('player--winner');
  player0El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

initGame();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const setDice = function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');

    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

btnRoll.addEventListener('click', setDice);
btnHold.addEventListener('click', function () {
  /* for (let i = 0; i < scores.length; i++) {
  //   playing = scores[activePlayer] >= 20 ? false : true;
  }
  */
  //check if the score reaches 20; assign the state of game.
  // if score reaches 20, no rolling dice will happen.
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // check for the winner or switch the  player
    if (scores[activePlayer] >= 20) {
      //finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

// reset the game button functionality

btnNew.addEventListener('click', function () {
  initGame();
});
