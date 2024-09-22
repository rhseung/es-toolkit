'use strict';

function fill(array, value) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : array.length;
  var length = array.length;
  var finalStart = Math.max(start >= 0 ? start : length + start, 0);
  var finalEnd = Math.min(end >= 0 ? end : length + end, length);
  for (var i = finalStart; i < finalEnd; i++) {
    array[i] = value;
  }
  return array;
}
exports.fill = fill;
