'use strict';
const app = require('../app.js');
const boardApi = require('../board/api.js');
const boardUi = require('../board/ui.js');

const signInSuccess = function(data) {
  console.log("sign in success");
  app.user = data.user;
  
  boardApi.createGame()
    .done(function(data){
      showGameLog();
      boardUi.createGameSuccess(data);
    });
};

const showGameLog = function() {
  let gameLog = $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  })
   .done(function(data){
     $('#score-counter').html(data.games.length);
   });
};

// const showGameCount = (gamesLog) => {
//   console.log(gamesLog['games'].length());
// };

const signOutSuccess = () => {
  return true;
  app.user = {};
};

const success = (data) => {
  return data;
};

const failure = (error) => {
  console.error(error);
  console.log("did not execute request");
};

module.exports = {
  signInSuccess,
  signOutSuccess,
  success,
  failure,
};
