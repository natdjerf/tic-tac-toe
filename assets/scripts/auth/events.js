'use strict';

const authApi = require('./api');
const authUi = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');

const addHandlers = () => {
  $('#sign-up').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log('sign up has been clicked.');
    authApi.signUp(authUi.signUpSuccess, authUi.failure, data);
  });
  $('#sign-in').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log('Sign in clicked');
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
    console.log(data);
  });
  $('#sign-out').on('submit', function (event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
    console.log('Sign out clicked');
  });
  $('#change-password').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    authApi.changePassword(authUi.changePasswordSuccess, authUi.failure, data);
    console.log('change pass');
  });
};

const gameHandlers = () => {
  $('#create-game').on('submit', function (event) {
    event.preventDefault();
    authApi.createGame(authUi.createGameSuccess, authUi.failure);
    console.log('game started');
  });
};


module.exports = {
    addHandlers,
    gameHandlers,
  };
