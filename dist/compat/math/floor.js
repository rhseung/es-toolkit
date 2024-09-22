'use strict';

var decimalAdjust = require('../_internal/decimalAdjust.js');
function floor(number) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return decimalAdjust.decimalAdjust('floor', number, precision);
}
exports.floor = floor;
