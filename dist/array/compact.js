'use strict';

function compact(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (item) {
      result.push(item);
    }
  }
  return result;
}
exports.compact = compact;
