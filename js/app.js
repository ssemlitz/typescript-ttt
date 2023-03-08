"use strict";
/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie;
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('button');
const boardEl = document.querySelector('.board');
/*----------------------------- Event Listeners -----------------------------*/
boardEl?.addEventListener('click', handleClick);
resetBtnEl?.addEventListener('click', init);
/*-------------------------------- Functions --------------------------------*/ 
