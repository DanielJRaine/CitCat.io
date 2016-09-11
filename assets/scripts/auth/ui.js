'use strict';
const app = require('../app.js');
const boardApi = require('../board/api.js');
const boardUi = require('../board/ui.js');
const userInfoApi = require('../user-info/api.js');

const signUpSuccess = function() {

};

const signInSuccess = function(data) {
  app.user = data.user;
  $('#sign-up').hide();
  $('#sign-in').hide();
  $('.user-email').text(app.user.email);
  boardApi.createGame()
    .done(function(data){
      boardUi.createGameSuccess(data);
      userInfoApi.showGameLog();
    });
};

const signOutSuccess = () => {
  $('#sign-up').show();
  $('#sign-in').show();
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
