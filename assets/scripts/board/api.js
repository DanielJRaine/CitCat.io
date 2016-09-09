'use strict';
let app = require('../app.js');

const createGame = () => {
  console.log("inside createGame");
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getGameIndex = () => {
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const updateGame = (cellIndex, cellValue, over) => {
  return $.ajax({
    url: app.host + '/games/' + app.user.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      "game": {
        "cell": {
          "index": cellIndex,
          "value": cellValue
        },
          "over": over
      }
    },
  });
};

module.exports = {
  createGame,
  getGameIndex,
  updateGame,
};
