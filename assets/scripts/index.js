'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const events = require('./auth/events');



// on document ready:
$(() => {
  events.addHandlers();
  events.gameHandlers();
  console.log('Page loaded!');
  $('#myModal').modal('show');
  $('#create-game').addClass('hidden');
  $('.modal-sign-out').addClass('hidden');
});
