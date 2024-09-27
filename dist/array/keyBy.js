'use strict';

function keyBy(arr, getKeyFromItem) {
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    var key = getKeyFromItem(item);
    result[key] = item;
  }
  return result;
}
exports.keyBy = keyBy;
