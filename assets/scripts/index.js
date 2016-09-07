'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const boardEvents = require('./board/events');
// On document ready.  Explicitly does this on page load.
// This is a callback [an anonymous function that takes no args]
// All functions listed here will run when page is finished loading.
$(() => {
    $('.col-md-2').on('click', boardEvents.onClickCell);
});
;
