'use strict';

function takeRight(arr) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (count <= 0) {
    return [];
  }
  return arr.slice(-count);
}
exports.takeRight = takeRight;
