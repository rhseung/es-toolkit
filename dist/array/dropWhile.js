'use strict';

function dropWhile(arr, canContinueDropping) {
  var dropEndIndex = arr.findIndex(function (item, index, arr) {
    return !canContinueDropping(item, index, arr);
  });
  if (dropEndIndex === -1) {
    return [];
  }
  return arr.slice(dropEndIndex);
}
exports.dropWhile = dropWhile;
