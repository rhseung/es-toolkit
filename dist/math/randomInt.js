'use strict';

var random = require('./random.js');
function randomInt(minimum, maximum) {
  return Math.floor(random.random(minimum, maximum));
}
exports.randomInt = randomInt;
