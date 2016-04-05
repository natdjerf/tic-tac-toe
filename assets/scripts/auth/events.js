'use strict';

// const getFormFields = require('../../../lib/get-form-fields');

const addHandlers = () => {
  $('#sign-in').on('submit', function (event) {
  event.preventDefault();
  console.log('`sign in clicked');
  });
};

// $('#sign-in').find("[name='credentials[email]']")

module.exports = {
    addHandlers,
  };
