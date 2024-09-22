'use strict';

function dropRightWhile(arr, canContinueDropping) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (!canContinueDropping(arr[i])) {
      return arr.slice(0, i + 1);
    }
  }
  return [];
}
exports.dropRightWhile = dropRightWhile;
