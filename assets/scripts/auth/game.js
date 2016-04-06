'use strict';

const app = require('../app-data.js');

let movePlayed = function (move) {
  app.game.cells[move] = move;
  console.log(app.game);
};


// let checkAvailability = function () {
//   if this.$(event.target)
//   if (app.game.cell !== '') {
//     console.log('not available');
//   };
//   else {
//     console.log('next move');
//   }:
// };
//


module.exports={
  movePlayed,
  // checkAvailability,
  app,
};
