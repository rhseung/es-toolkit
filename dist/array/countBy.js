'use strict';

function countBy(arr, mapper) {
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    var _result$key;
    var item = arr[i];
    var key = mapper(item);
    result[key] = ((_result$key = result[key]) !== null && _result$key !== void 0 ? _result$key : 0) + 1;
  }
  return result;
}
exports.countBy = countBy;
