'use strict';
//
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');

const diceEl = document.querySelector('.dice');

score1.textContent = 0;
score2.textContent = 0;
diceEl.classList.add('hidden');
