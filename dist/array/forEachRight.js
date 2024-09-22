'use strict';

function forEachRight(arr, callback) {
  for (var i = arr.length - 1; i >= 0; i--) {
    var element = arr[i];
    callback(element, i, arr);
  }
}
exports.forEachRight = forEachRight;
