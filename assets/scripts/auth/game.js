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
  $('.board > div > div').off('click');
  app.game.over = 'true';
  }
  else if (moveCount === 9) {
  winner = 'tie';
  app.game.over = 'true';
  }

  else {
  console.log('next move');
  }
};


let movePlayed = function (data) {
  if (turn) {
  player = 'x';
  app.game.cells[data] = player;
  gameBoard[data] = player;
  console.log(app.game);
  console.log(gameBoard);
  this.checkForWinner();
  moveCount++;
  turn = !turn;
  }
  else {
  player = 'o';
  app.game.cells[data] = player;
  gameBoard[data] = player;
  console.log(app.game);
  console.log(gameBoard);
  turn = !turn;
  }
};


let checkAvailability = function (data) {
  if (app.game.cells[data] === '') {
    console.log('available');
    this.movePlayed(data);
  }
  else {
    console.log('next move');
  }
};





module.exports={
  movePlayed,
  checkAvailability,
  app,
  checkForWinner,
};
