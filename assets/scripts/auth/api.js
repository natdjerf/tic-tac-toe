'use strict';

const app = require('../app-data.js');
const gameCheck = require('./game');

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-up',
    data,
  }).done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-in',
    data,
  }).done(success)
  .fail(failure);
  };

const signOut = (success, failure) => {
  $.ajax({
    method: 'DELETE',
    url: app.api + '/sign-out/' + app.user.id,
    headers:{
    Authorization : 'Token token=' + app.user.token,
    },
  }).done(success)
.fail(failure);
};

const changePassword = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + '/change-password/' + app.user.id,
    headers:{
      Authorization : 'Token token=' + app.user.token,
    },
    data,
  }).done(success)
    .fail(failure);
};

const createGame = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/games',
    headers:{
      Authorization : 'Token token=' + app.user.token,
    },
    data,
  }).done(success)
    .fail(failure);
  };

// PATCH! slightly working - over is working, index & value are not!! HMM!
// you're not storing app.game.index or app.game.vale anywhere.
// oh shit. game over is also not working well.

const updateGame = (success, failure) => {
  console.log(app.game);
  $.ajax({
    method: 'PATCH',
    url: app.api + '/games/' + app.game.id,
    headers:{
      Authorization : 'Token token=' + app.user.token,
    },
    data:{
    "game": {
        "cell": {
        "index": app.game.index,
        "value": app.game.cells[app.game.index],
        },
      "over": app.game.over,
    },
  },
  }).done(success)
    .fail(failure);
  };


module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createGame,
  updateGame,
};
