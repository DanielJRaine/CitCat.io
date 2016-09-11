'use strict';
const app = require('../app.js');
const boardApi = require('../board/api.js');
const boardUi = require('../board/ui.js');
const userInfoApi = require('../user-info/api.js');

const signInSuccess = function(data) {
  app.user = data.user;
  
  boardApi.createGame()
    .done(function(data){
      boardUi.createGameSuccess(data);
      userInfoApi.showGameLog();
    });
};

const signOutSuccess = () => {
  return true;
  app.user = {};
};

const success = (data) => {
  return data;
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  signInSuccess,
  signOutSuccess,
  success,
  failure,
};
