'use strict';
const app = require('../app');

const changePasswordSuccess = (data) => {
  console.log(data);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(data);
};

const signOutSuccess = () => {
  console.log("signout successful");
  app.user = {};
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
  console.log("did not execute request");
};

module.exports = {
  failure,
  success,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
