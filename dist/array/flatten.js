'use strict';

function flatten(arr) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var result = [];
  var flooredDepth = Math.floor(depth);
  var _recursive = function recursive(arr, currentDepth) {
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      if (Array.isArray(item) && currentDepth < flooredDepth) {
        _recursive(item, currentDepth + 1);
      } else {
        result.push(item);
      }
    }
  };
  _recursive(arr, 0);
  return result;
}
exports.flatten = flatten;
