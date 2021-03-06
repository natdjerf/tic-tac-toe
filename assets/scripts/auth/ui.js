'use strict';

const app = require('../app-data.js');

const signUpSuccess = (data) => {
  app.user = data.user;
  console.log(data);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(data);
};

const signOutSuccess = (data) => {
  app.user = null;
  console.log(data);
  console.log('signed out');
};

const changePasswordSuccess = () => {
  console.log('Password changed');
};

const createGameSuccess = (data) => {
  app.game = data.game;
  console.log(data);
};

const updateGameSuccess = (data) => {
  app.game = data.game;
  console.log(data.game);
  console.log('update game success check');
};

const getGamesSuccess = (data) => {
  app.game = data.game;
  $('#games-played').val(data.games.length + ' Total Games' );
  console.log(data);
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};


module.exports= {
  app,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePasswordSuccess,
  createGameSuccess,
  updateGameSuccess,
  getGamesSuccess,
  success,
  failure,
};
