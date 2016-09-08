'use strict';

const boardApi = require('./api.js');
const boardUi = require('./ui.js');
const boardLogic = require('./game-logic.js');

let game = boardLogic.game;
let player_x = boardLogic.player_x;
let player_o = boardLogic.player_o;

const onClickCell = (event) => {
  event.preventDefault();
  let cellIndex = $(event.target).attr('id');
  
  if (game.cells[cellIndex] !== 0) {
    alert("That square is taken");
    
  } else if (player_x.turn) {
      boardUi.xClick();
      game.cells[cellIndex] = 1;
      boardLogic.changeTurn();
      
  } else if (player_o.turn) {
      boardUi.oClick();
      game.cells[cellIndex] = -1;
      boardLogic.changeTurn();
      
  } else {
      boardUi.turnError();
  }
  
  if(boardLogic.isGameOver() === 1) {
    alert("X wins!");
    boardLogic.clearBoard();
  } else if (boardLogic.isGameOver() === -1) {
    alert("O wins!");
    boardLogic.clearBoard();
  } else if (boardLogic.isGameOver() === 0){
    alert("Cat's game!");
    boardLogic.clearBoard();
  } else {
    return;
  }
};

module.exports = {
  onClickCell,
};
