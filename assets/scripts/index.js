'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
const boardEvents = require('./board/events.js');
const authEvents = require('./auth/events.js');

$(() => {
    $('.cell').hide();
    $('#change-password').hide();
    $('#create-game').hide();
    $('#sign-out').hide();
    $('.col-md-2').on('click', boardEvents.onClickCell);
    $('#create-game').on('click', boardEvents.onCreateGame);
    authEvents.addHandlers();
});
