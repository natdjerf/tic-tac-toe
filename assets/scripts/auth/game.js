'use strict';

const app = require('../app-data.js');

let turn = true;
let gameBoard = ['', '', '', '', '', '', '', ''];
let player;
let winner;
let moveCount = 0;

// Clear the board to start another game without refreshing page:
let resetGame = () => {
  gameBoard = ['', '', '', '', '', '', '', ''];
  moveCount = 0;
  $('.board>div>div').text('');
};

// Before the next player makes a move, check to see if the game has completed.
let checkForWinner = function () {
  if ((gameBoard[0] === player && gameBoard[1] === player && gameBoard[2] === player) ||
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
     app.game.over = 'true';
     resetGame();
  }
  else if (moveCount === 9) {
     console.log('Tie game.');
     winner = 'tie';
     $('h1').text('Tie game');
     app.game.over = 'true';
     resetGame();
  }
  else {
     console.log('next move');
  }
};

// If spot is available, place the player's mark in the selected location:
let movePlayed = function (data) {
  if (turn) {
  player = 'x';
  app.game.index = data;
  app.game.cells[data] = player;
  gameBoard[data] = player;
  console.log(app.game);
  console.log(gameBoard);
  this.checkForWinner();
  $(event.target).text(app.game.cells[data]);
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
  $(event.target).text(app.game.cells[data]);
  turn = !turn;
  }
};

// Ensure a location is available for play:
let checkAvailability = function (data) {
  if (app.game.cells[data] === '') {
    console.log('available');
    moveCount++;
    this.movePlayed(data);
    console.log(moveCount);
  }
  else {
    console.log('not available');
    console.log(moveCount);
  }
};




module.exports={
  movePlayed,
  checkAvailability,
  app,
  checkForWinner,
  resetGame,
};
