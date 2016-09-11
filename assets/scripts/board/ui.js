'use strict';
const app = require('../app.js');
const userInfoApi = require('../user-info/api.js');

const xClick = () => {
  $(event.target).html('x');
};

const oClick = () => {
  $(event.target).html('o');
};

const turnError = () => {
  console.log('error in turns attribute');
};

const createGameSuccess = (data) => {
  app.game = data.game;
  console.log("new game created");
  userInfoApi.showGameLog();
  $('#myModal').modal('show');
};

const createGameFail = () => {
  console.log("create game failed");
};

const updateSuccess = () => {
};

const updateFail = () => {
  console.log("update fail");
};

const endGameAnimation = (winner) => {
  $('#myModal').modal('show');
  $('.gameOverAnimation').html(winner + " wins!");
};

module.exports = {
  xClick,
  oClick,
  turnError,
  createGameSuccess,
  createGameFail,
  updateSuccess,
  updateFail,
  endGameAnimation,
};
