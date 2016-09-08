'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
const boardEvents = require('./board/events');
const authEvents = require('./auth/events');

$(() => {
    $('.col-md-2').on('click', boardEvents.onClickCell);
    authEvents.addHandlers();
});
