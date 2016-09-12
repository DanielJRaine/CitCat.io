'use strict';
const app = require('../app.js');
const boardApi = require('../board/api.js');
const boardUi = require('../board/ui.js');
const userInfoApi = require('../user-info/api.js');
const boardLogic = require('../board/game-logic.js');

const signUpSuccess = function() {
  
};

// refactor into authToggle, which toggles on/off the appropriate auth forms.

const signInSuccess = function(data) {
  app.user = data.user;
  $('#welcome').hide();
  $('.cell').show();
  $('#create-game').show();
  $('#sign-up').hide();
  $('#sign-in').hide();
  $('#sign-out').show();
  $('#change-password').show();
  $('.user-email').text(app.user.email);
  boardApi.createGame()
    .done(function(data){
      boardUi.createGameSuccess(data);
      userInfoApi.showGameLog();
    });
};

const signOutSuccess = () => {
  $('#create-game').hide();
  $('#welcome').show();
  $('#sign-up').show();
  $('#sign-in').show();
  $('.user-email').html('Cit@Cat.io');
  $('#score-counter').html('><(((O>');
  $('#change-password').hide();
  $('#sign-out').hide();
  boardLogic.clearBoard();
  
  app.user = {};
  return true;
};

const success = (data) => {
  return data;
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  success,
  failure,
};
