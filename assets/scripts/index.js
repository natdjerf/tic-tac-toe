'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const events = require('./auth/events');
// const uiEvents = require('./auth/event-ui');


// on document ready:
$(() => {
  events.addHandlers();
  events.gameHandlers();
  // uiEvents.uiHandlers();
  console.log('Page loaded!');
  $('.modal-sign-out').hide();
  $('#myModal').modal('show');
});
