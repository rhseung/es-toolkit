'use strict';

function takeWhile(arr, shouldContinueTaking) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (!shouldContinueTaking(item)) {
      break;
    }
    result.push(item);
  }
  return result;
}
exports.takeWhile = takeWhile;
