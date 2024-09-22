'use strict';

function isLength(value) {
  return Number.isSafeInteger(value) && value >= 0;
}
exports.isLength = isLength;
