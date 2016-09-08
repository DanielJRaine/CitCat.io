'use strict';
const Victor = require('victor');
const math = require('mathjs');
const localGame = require('./../../data/local-game.js');

let gameData = localGame.game;
let player_x = localGame.player_x;
let player_o = localGame.player_o;
// let game = {
//   id: 0,
//   cells: [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   over: false,
//   player_x: {
//     id: 0,
//     email: "x@x.com"
//   },
//   player_o: {
//     id: 1,
//     email: "o@o.com"
//   }
// };
//
// let player_x = {
//   id: 0,
//   email: 'x@x.com',
//   icon: 'x',
//   score: 0,
//   turn: true
// };
//
// let player_o = {
//   id: 1,
//   email: 'o@o.com',
//   icon: 'x',
//   score: 0,
//   turn: false
// };

// represents X as +1 and O as -1.
// Adds rows, columns, and traces using linear algebra.
// If sum === +/-3, returns winner, otherwise returns 0;
const isGameOver = function() {
  let colVector1 = math.matrix(gameData.cells.slice(0,3));
  let colVector2 = math.matrix(gameData.cells.slice(3,6));
  let colVector3 = math.matrix(gameData.cells.slice(6));
  
  let row1Sum = gameData.cells.slice(0,3).reduce((a,b) => a + b);
  let row2Sum = gameData.cells.slice(3,6).reduce((a,b) => a + b);
  let row3Sum = gameData.cells.slice(6).reduce((a,b) => a + b);
  
  let initialColumnSum = math.matrix();
  let finalColumnSum = math.matrix();
  let finalRowSum = [];
  initialColumnSum = math.add(colVector1, colVector2);
  finalColumnSum = math.add(initialColumnSum, colVector3);
  finalRowSum = [row1Sum, row2Sum, row3Sum];
  
  let cellMatrix = math.matrix([gameData.cells.slice(0,3),
                               gameData.cells.slice(3,6),
                               gameData.cells.slice(6)]);

  let yReflectedCellMatrix = math.matrix([[gameData.cells[2], gameData.cells[1], gameData.cells[0]],
                                          [gameData.cells[5], gameData.cells[4], gameData.cells[3]],
                                          [gameData.cells[8], gameData.cells[7], gameData.cells[6]]]);
  
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
    
  } else if(gameData.cells.indexOf(0) === -1){
      return 0;
  }
};

const changeTurn = function() {
  player_x.turn = !player_x.turn;
  player_o.turn = !player_o.turn;
};

const clearBoard = function() {
  gameData.cells = [0,0,0,0,0,0,0,0,0];
  $('.cell').html('');
};

module.exports = {
  // game,
  // player_x,
  // player_o,
  isGameOver,
  changeTurn,
  clearBoard,
}
