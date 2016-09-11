'use strict';
const app = require('../app.js');
const userInfoApi = require('../user-info/api.js');

const xClick = () => {
  $(event.target).html('x');
  $(event.target).css('font-size', '100px');
};

const oClick = () => {
  $(event.target).html('o');
  $(event.target).css('font-size', '100px');
};

const turnError = () => {
};

const createGameSuccess = (data) => {
  app.game = data.game;
  userInfoApi.showGameLog();
};

const createGameFail = () => {
};

const updateSuccess = () => {
};

const updateFail = () => {
};

const endGameAnimation = (winner) => {
  $('#myModal').modal('show');
  if (winner !== ''){
    $('.gameOverAnimation').html(winner + " wins!");
  } else {
    $('.gameOverAnimation').html("Cat's Game!");
  }
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
