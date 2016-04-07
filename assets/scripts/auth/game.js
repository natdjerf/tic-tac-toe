'use strict';

const app = require('../app-data.js');

let turn = true;
let gameBoard = ['','','','','','','',''];
let player;
let winner;
let moveCount = 0;

let checkForWinner = function () {
  if  ((gameBoard[0] === player && gameBoard[1] === player && gameBoard[2] === player) ||
      (gameBoard[3] === player && gameBoard[4] === player && gameBoard[5] === player) ||
      (gameBoard[6] === player && gameBoard[7] === player && gameBoard[8] === player) ||
      (gameBoard[0] === player && gameBoard[3] === player && gameBoard[6] === player) ||
      (gameBoard[1] === player && gameBoard[4] === player && gameBoard[7] === player) ||
      (gameBoard[2] === player && gameBoard[5] === player && gameBoard[8] === player) ||
      (gameBoard[0] === player && gameBoard[4] === player && gameBoard[8] === player) ||
      (gameBoard[2] === player && gameBoard[4] === player && gameBoard[6] === player)) {
  winner = player;
  console.log(winner + ' is winner');
  $('h1').text(winner + ' is winner!');
  $('.board > div > div').off('click');
  app.game.over = 'true';
  }
  else if (moveCount === 9) {
  console.log('Tie game.');
  $('.board > div > div').off('click');
  winner = 'tie';
  $('h1').text('Tie game');
  app.game.over = 'true';
  }
  else {
  console.log('next move');
  }
};


let movePlayed = function (data) {
  if (turn) {
  player = 'x';
  app.game.index = data;
  app.game.cells[data] = player;
  gameBoard[data] = player;
  console.log(app.game);
  console.log(gameBoard);
  this.checkForWinner();
  turn = !turn;
  }
  else {
  player = 'o';
  app.game.index = data;
  app.game.cells[data] = player;
  gameBoard[data] = player;
  console.log(app.game);
  console.log(gameBoard);
  this.checkForWinner();
  turn = !turn;
  }
};


let checkAvailability = function (data) {
  if (app.game.cells[data] === '') {
    console.log('available');
    moveCount++;
    this.movePlayed(data);
    console.log(moveCount);
  }
  else {
    console.log('not available');
  }
};

let resetGame = () => {
  gameBoard = ['','','','','','','',''];
  $('h1').text('tic-tac-toe');
  $('.board > div > div').on('click');
};



module.exports={
  movePlayed,
  checkAvailability,
  app,
  checkForWinner,
  resetGame,
};
