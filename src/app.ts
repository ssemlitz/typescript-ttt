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
let board: number[]
let turn: number 
let winner: boolean
let tie: boolean

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll<HTMLDivElement>('.sqr')
const messageEl = document.querySelector<HTMLHeadingElement>('#message') 
const resetBtnEl = document.querySelector<HTMLButtonElement>('button')
const boardEl = document.querySelector<HTMLElement>('.board')

/*----------------------------- Event Listeners -----------------------------*/
boardEl?.addEventListener('click', handleClick)
resetBtnEl?.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/

init()

function init(): void {
  board = [0,0,0,0,0,0,0,0,0]
  turn = 1
  winner = false
  tie = false
  render()
}

function placePiece(idx: number): void {
  board[idx] = turn
}

function handleClick(evt: MouseEvent): void {
  if (!(evt.target instanceof HTMLElement)) return

  const sqIdx = parseInt(evt.target.id.replace('sq', ''))

  if (board[sqIdx] !== 0 || winner) return
  placePiece(sqIdx)
  checkForTie()
  checkForWinner()
  switchPlayerTurn()
  render()
}

function checkForTie(): void {
  if (board.includes(0)) return
  tie = true
}

function checkForWinner(): void {
  for (let combo of winningCombos) {
    if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3) {
      winner = true
    }
  }
}

