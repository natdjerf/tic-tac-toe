'use strict';

const app = require('../app-data.js');

let currentPlayer = true;

let movePlayed = function (move) {
  if (currentPlayer) {
  app.game.cells[move] = 'x';
  console.log(app.game);
  currentPlayer = false;
  }
  else {
  app.game.cells[move] = 'o';
  console.log(app.game);
  currentPlayer = true;
  }
};


let checkAvailability = function (move) {
  if (app.game.cells[move] === '') {
    console.log('available');
    this.movePlayed(move);
  }
  else {
    console.log('next move');
  }
};



module.exports={
  movePlayed,
  checkAvailability,
  app,
};
