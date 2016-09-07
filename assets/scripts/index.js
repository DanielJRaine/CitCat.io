'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
const boardEvents = require('./board/events');

let game = {
  id: 0,
  cells: ["", "", "", "", "", "", "", "", ""],
  over: false,
  player_x: {
    id: 0,
    email: "x@x.com"
  },
  player_o: {
    id: 1,
    email: "o@o.com"
  }
};

let player = {
  id: 0,
  email: 'x@x.com',
  icon: 'x',
  score: 0,
  turn: true
};

$(() => {
    $('.col-md-2').on('click', boardEvents.onClickCell);
});
