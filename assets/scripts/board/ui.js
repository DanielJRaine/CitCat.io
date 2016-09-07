'use strict';

const xClick = () => {
  alert('x clicked');
  $(event.target).html('x');
  
};

const oClick = () => {
  alert('o clicked');
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
