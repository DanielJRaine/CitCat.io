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
    $('.gameOverAnimation').css('color', 'crimson');
    $('.gameOverAnimation').html("I <img data-bind='attr: {src: url}, style: {width: '48px', height:'48px'}' src='https://cdn1.iconfinder.com/data/icons/animals-18/154/cat-seat-skin-body-animal-64.png' style='width: 100px; height: 100px; background-color: white'> WIN");
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
