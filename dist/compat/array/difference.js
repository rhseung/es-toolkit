'use strict';

var difference$1 = require('../../array/difference.js');
var flatten = require('../../array/flatten.js');
function difference(arr) {
  var arr1 = arr;
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }
  var arr2 = flatten.flatten(values);
  return difference$1.difference(arr1, arr2);
}
exports.difference = difference;
