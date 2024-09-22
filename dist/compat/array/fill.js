'use strict';

var fill$1 = require('../../array/fill.js');
function fill(array, value) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : array.length;
  start = Math.floor(start);
  end = Math.floor(end);
  if (!start) {
    start = 0;
  }
  if (!end) {
    end = 0;
  }
  return fill$1.fill(array, value, start, end);
}
exports.fill = fill;
