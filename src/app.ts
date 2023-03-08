/*-------------------------------- Constants --------------------------------*/
const winningCombos: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll<HTMLDivElement>('.sqr')
const messageEl = document.querySelector<HTMLHeadingElement>('#message') 
const resetBtnEl = document.querySelector<HTMLButtonElement>('button')
const boardEl = document.querySelector<HTMLElement>('.board')

/*----------------------------- Event Listeners -----------------------------*/
boardEl?.addEventListener('click', handleClick)
resetBtnEl?.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/