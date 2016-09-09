'use strict';
const app = require('../app.js');

const signInSuccess = (data) => {
  app.user = data.user;
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
  console.log("did not execute request");
};

module.exports = {
  signInSuccess,
  signOutSuccess,
  success,
  failure,
};
