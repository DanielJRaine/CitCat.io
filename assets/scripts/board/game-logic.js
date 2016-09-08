'use strict';
let Victor = require('victor');
let math = require('mathjs');

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

// represents X as +1 and O as -1.
// Adds rows, columns, and traces using linear algebra.
// If sum === +/-3, returns winner, otherwise returns 0;
const isGameOver = function() {
  let colVector1 = math.matrix(game.cells.slice(0,3));
  let colVector2 = math.matrix(game.cells.slice(3,6));
  let colVector3 = math.matrix(game.cells.slice(6));
  
  let row1Sum = game.cells.slice(0,3).reduce((a,b) => a + b);
  let row2Sum = game.cells.slice(3,6).reduce((a,b) => a + b);
  let row3Sum = game.cells.slice(6).reduce((a,b) => a + b);
  
  let initialColumnSum = math.matrix();
  let finalColumnSum = math.matrix();
  let finalRowSum = [];
  initialColumnSum = math.add(colVector1, colVector2);
  finalColumnSum = math.add(initialColumnSum, colVector3);
  finalRowSum = [row1Sum, row2Sum, row3Sum];
  
  let cellMatrix = math.matrix([game.cells.slice(0,3),
                               game.cells.slice(3,6),
                               game.cells.slice(6)]);

  let yReflectedCellMatrix = math.matrix([[game.cells[2], game.cells[1], game.cells[0]],
                                          [game.cells[5], game.cells[4], game.cells[3]],
                                          [game.cells[8], game.cells[7], game.cells[6]]]);
  
  if(finalColumnSum._data.indexOf(3) >= 0 ||
     finalRowSum.indexOf(3) >= 0          ||
     math.trace(cellMatrix) === 3         ||
     math.trace(yReflectedCellMatrix) === 3) {
    return 1;
    
  } else if(finalColumnSum._data.indexOf(-3) >= 0 ||
            finalRowSum.indexOf(-3) >= 0          ||
            math.trace(cellMatrix) === -3         ||
            math.trace(yReflectedCellMatrix) === -3) {
    return -1;
    
  } else if(game.cells.indexOf(0) === -1){
      return 0;
  }
};

const changeTurn = function() {
  player_x.turn = !player_x.turn;
  player_o.turn = !player_o.turn;
};

const clearBoard = function() {
  game.cells = [0,0,0,0,0,0,0,0,0];
  $('.cell').html('');
};

module.exports = {
  game,
  player_x,
  player_o,
  isGameOver,
  changeTurn,
  clearBoard,
}
