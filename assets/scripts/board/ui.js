'use strict';
const app = require('../app.js');

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
};

const createGameFail = () => {
  console.log("create game failed");
};

const updateSuccess = (data) => {
  showGameLog();
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
     console.log(data);
   });
};

const updateFail = () => {
  console.log("update fail");
};

module.exports = {
  xClick,
  oClick,
  turnError,
  createGameSuccess,
  createGameFail,
  updateSuccess,
  updateFail,
};
