'use strict';

var decimalAdjust = require('../_internal/decimalAdjust.js');
function round(number) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return decimalAdjust.decimalAdjust('round', number, precision);
}
exports.round = round;
