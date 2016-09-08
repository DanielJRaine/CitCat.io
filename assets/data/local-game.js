'use strict';

let game = {
  id: 0,
  cells: [0, 0, 0, 0, 0, 0, 0, 0, 0],
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

let player_x = {
  id: 0,
  email: 'x@x.com',
  icon: 'x',
  score: 0,
  turn: true
};

let player_o = {
  id: 1,
  email: 'o@o.com',
  icon: 'x',
  score: 0,
  turn: false
};

module.exports = {
  game,
  player_x,
  player_o,
};
