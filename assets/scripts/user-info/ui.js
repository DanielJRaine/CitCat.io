'use strict';
const app = require('../app.js');
const userInfoApi = require('./api.js');

const showGameCount = () => {
  console.log("in user-info ui, show Game count");
  console.log(userInfoApi.getGameIndex);
  // $('#game-count').html(app.game.length());
};

module.exports = {
  showGameCount,
};
