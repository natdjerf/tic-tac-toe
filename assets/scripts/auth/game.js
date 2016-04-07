'use strict';

const app = require('../app-data.js');

let turn = true;
let gameBoard = ['','','','','','','',''];
let player;
let winner;

let checkForWinner = function () {
  if (gameBoard[0] === player && gameBoard[1] === player && gameBoard[2] === player){
  		winner = player;
  		console.log(winner + ' is winner');
  }
  else if (gameBoard[3] === player && gameBoard[4] === player && gameBoard[5] === player){
  		winner = player;
  		console.log(winner + ' is winner');
  }
  else if (gameBoard[6] === player && gameBoard[7] === player && gameBoard[8] === player){
  		winner = player;
  		console.log(winner + ' is winner');
  }
  else if (gameBoard[0] === player && gameBoard[3] === player && gameBoard[6] === player){
  		winner = player;
  		console.log(winner + ' is winner');
  }
  else if (gameBoard[1] === player && gameBoard[4] === player && gameBoard[7] === player){
  		winner = player;
  		console.log(winner + ' is winner');
  }
  else if (gameBoard[2] === player && gameBoard[5] === player && gameBoard[8] === player){
  		winner = player;
  		console.log(winner + 'is winner');
  }
  else if (gameBoard[0] === player && gameBoard[4] === player && gameBoard[8] === player){
  		winner = player;
  		console.log(winner + ' is winner');
  }
  else if (gameBoard[2] === player && gameBoard[4] === player && gameBoard[6] === player){
  		winner = player;
  		console.log(winner + ' is winner');
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
