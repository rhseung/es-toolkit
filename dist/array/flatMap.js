'use strict';

var flatten = require('./flatten.js');
function flatMap(arr, iteratee) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return flatten.flatten(arr.map(function (item) {
    return iteratee(item);
  }), depth);
}
exports.flatMap = flatMap;
