'use strict';

const app = require('../app-data.js');

let movePlayed = function (move) {
  app.game.cells[move] = move;
  console.log(app.game);
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
