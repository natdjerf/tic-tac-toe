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



// $('.board > div > div').on('click', function() {
//   event.preventDefault();
//   console.log('move played');
// });
// $('.board > div > div').on("click", function() {
//   $( this ).text('x').css({
//     "font-size" :  "5em",
//     "font-color" : "black",
//     "text-align" : "center",
//   });
// });
// on check - if no val(), text('x or o');
// $('.top-center').text();

// $('#sign-in').find("[name='credentials[email]']")
//$('#sign-up').find("[name='credentials[email]']").val();

module.exports = {
    addHandlers,
  };
