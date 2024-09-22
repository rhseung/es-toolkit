'use strict';

function at(arr, indices) {
  var result = [];
  for (var i = 0; i < indices.length; i++) {
    var index = indices[i];
    result[i] = arr.at(index);
  }
  return result;
}
exports.at = at;
