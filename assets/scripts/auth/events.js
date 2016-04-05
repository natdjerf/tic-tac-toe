'use strict';

const authApi = require('./api');
const authUi = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');

const addHandlers = () => {
  $('#sign-up').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log('sign up has been clicked.');
    authApi.signUp(authUi.success, authUi.failure, data);
  });
  $('#sign-in').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log('Sign in clicked');
    authApi.signIn(authUi.success, authUi.failure, data);
    console.log(data);
  });
};


// $('#sign-in').find("[name='credentials[email]']")
//$('#sign-up').find("[name='credentials[email]']").val();

module.exports = {
    addHandlers,
  };
