'use strict';

var inRange$1 = require('../../math/inRange.js');
function inRange(value, minimum, maximum) {
  if (!minimum) {
    minimum = 0;
  }
  if (maximum != null && !maximum) {
    maximum = 0;
  }
  if (minimum != null && typeof minimum !== 'number') {
    minimum = Number(minimum);
  }
  if (maximum == null && minimum === 0) {
    return false;
  }
  if (maximum != null && typeof maximum !== 'number') {
    maximum = Number(maximum);
  }
  if (maximum != null && minimum > maximum) {
    var _ref = [maximum, minimum];
    minimum = _ref[0];
    maximum = _ref[1];
  }
  if (minimum === maximum) {
    return false;
  }
  return inRange$1.inRange(value, minimum, maximum);
}
exports.inRange = inRange;
