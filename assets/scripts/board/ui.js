'use strict';
const app = require('../app.js');

const xClick = () => {
  $(event.target).html('x');
  
};

const oClick = () => {
  $(event.target).html('o');
};

const turnError = () => {
  alert('error in turns attribute');
};

const createGameSuccess = (data) => {
  console.log("create game success");
  console.log(data);
};

const createGameFail = () => {
  console.log("create game failed");
}

const updateSuccess = (data) => {
  console.log(data);
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
