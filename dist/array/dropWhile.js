'use strict';

function dropWhile(arr, canContinueDropping) {
  var dropEndIndex = arr.findIndex(function (item) {
    return !canContinueDropping(item);
  });
  if (dropEndIndex === -1) {
    return [];
  }
  return arr.slice(dropEndIndex);
}
exports.dropWhile = dropWhile;
