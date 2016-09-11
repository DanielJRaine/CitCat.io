'use strict';
const app = require('../app.js');

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

module.exports = {
  showGameLog,
};
