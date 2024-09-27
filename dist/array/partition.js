'use strict';

function partition(arr, isInTruthy) {
  var truthy = [];
  var falsy = [];
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (isInTruthy(item)) {
      truthy.push(item);
    } else {
      falsy.push(item);
    }
  }
  return [truthy, falsy];
}
exports.partition = partition;
