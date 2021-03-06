'use strict';

const authApi = require('./api');
const authUi = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const gameCheck = require('./game');

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
    $('#create-game').removeClass('hidden');
    $('.modal-sign-out').removeClass('hidden');
    $("#sign-in").addClass('hidden');
    $("#sign-up").addClass('hidden');
    console.log(data);
  });
  $('#sign-out').on('submit', function (event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
    console.log('Sign out clicked');
    $('#myModal2').modal('hide');
    $('.modal-sign-out').addClass('hidden');
    $("#sign-in").removeClass('hidden');
    $("#sign-up").removeClass('hidden');
    $('#create-game').addClass('hidden');
  });
  $('#change-password').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    authApi.changePassword(authUi.changePasswordSuccess, authUi.failure, data);
    console.log('change pass');
    $("#change-password").addClass('hidden');
  });
};

const gameHandlers = () => {
  $('#create-game').on('submit', function (event) {
    event.preventDefault();
    authApi.createGame(authUi.createGameSuccess, authUi.failure);
    $('#myModal').modal('hide');
    console.log('game started');
    $('h1').text('tic-tac-toe');
    $('.board>div>div').text('');
  });
  $('.board > div > div').on("click", function(event) {
    event.preventDefault();
    let data = $(event.target).data('index');
    console.log(data);
    gameCheck.checkAvailability(data);
    authApi.updateGame(authUi.updateGameSuccess, authUi.failure);
    console.log('patch successfull???');
  });
  $('#get-games').on("click", function(event) {
    event.preventDefault();
    authApi.getGames(authUi.getGamesSuccess, authUi.failure);
    console.log('games retrieved?');
  });
};



module.exports = {
    addHandlers,
    gameHandlers,
  };
