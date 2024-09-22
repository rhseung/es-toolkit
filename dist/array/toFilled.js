'use strict';

function toFilled(arr, value) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : arr.length;
  var length = arr.length;
  var finalStart = Math.max(start >= 0 ? start : length + start, 0);
  var finalEnd = Math.min(end >= 0 ? end : length + end, length);
  var newArr = arr.slice();
  for (var i = finalStart; i < finalEnd; i++) {
    newArr[i] = value;
  }
  return newArr;
}
exports.toFilled = toFilled;
