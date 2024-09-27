'use strict';

function isNumber(value) {
  return typeof value === 'number' || value instanceof Number;
}
exports.isNumber = isNumber;
