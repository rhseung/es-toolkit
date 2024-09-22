'use strict';

function round(value) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (!Number.isInteger(precision)) {
    throw new Error('Precision must be an integer.');
  }
  var multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
}
exports.round = round;
