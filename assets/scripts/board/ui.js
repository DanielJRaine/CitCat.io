'use strict';

const xClick = () => {
  $(event.target).html('x');
  
};

const oClick = () => {
  $(event.target).html('o');
};

const turnError = () => {
  alert('error in turns attribute');
};

module.exports = {
  xClick,
  oClick,
  turnError,
};
