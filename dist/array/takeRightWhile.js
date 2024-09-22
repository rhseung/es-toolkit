'use strict';

function takeRightWhile(arr, shouldContinueTaking) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (!shouldContinueTaking(arr[i])) {
      return arr.slice(i + 1);
    }
  }
  return arr.slice();
}
exports.takeRightWhile = takeRightWhile;
