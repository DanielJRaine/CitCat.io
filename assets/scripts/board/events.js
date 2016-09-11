'use strict';

const boardApi = require('./api.js');
const boardUi = require('./ui.js');
const boardLogic = require('./game-logic.js');
const localGame = require('./../../data/local-game.js');

let gameBoard = localGame.game;
let player_x = localGame.player_x;
let player_o = localGame.player_o;

const onCreateGame = (event) => {
  event.preventDefault();
  boardLogic.resetGame();
  boardApi.createGame()
    .done(boardUi.createGameSuccess)
    .fail(boardUi.createGameFail);
};

const onUpdateGame = (event, over) => {
  event.preventDefault();
  let cellIndex = $(event.target).attr('id');
  let cellValue = $(event.target).html();
  
  boardApi.updateGame(cellIndex, cellValue, over)
    .done(boardUi.updateSuccess)
    .fail(boardUi.updateFail);
};

const endGame = (event, over, winner) => {
  event.preventDefault();
  onUpdateGame(event, over);
  boardUi.endGameAnimation(winner);
  onCreateGame(event);
};

const onClickCell = (event) => {
  event.preventDefault();
  let cellIndex = $(event.target).attr('id');
  
  if (gameBoard.cells[cellIndex] !== 0) {
    alert("That square is taken");
    
  } else if (player_x.turn) {
      boardUi.xClick();
      gameBoard.cells[cellIndex] = 1;
      boardLogic.changeTurn();
      onUpdateGame(event, false);
      
  } else if (player_o.turn) {
      boardUi.oClick();
      gameBoard.cells[cellIndex] = -1;
      boardLogic.changeTurn();
      onUpdateGame(event, false);
      
  } else {
      boardUi.turnError();
  }
  
  if(boardLogic.isGameOver() === 1) {
    endGame(event, true, 'x');
    
  } else if (boardLogic.isGameOver() === -1) {
    endGame(event, true, 'o');
    
  } else if (boardLogic.isGameOver() === 0){
    endGame(event, true, '');
        
  } else {
    return;
  }
};

module.exports = {
  onCreateGame,
  onUpdateGame,
  onClickCell,
};
