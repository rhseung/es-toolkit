'use strict';

function groupBy(arr, getKeyFromItem) {
  var result = Object.create(null);
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    var key = getKeyFromItem(item);
    if (result[key] == null) {
      result[key] = [];
    }
    result[key].push(item);
  }
  return result;
}
exports.groupBy = groupBy;
