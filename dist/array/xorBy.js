'use strict';

var differenceBy = require('./differenceBy.js');
var intersectionBy = require('./intersectionBy.js');
var unionBy = require('./unionBy.js');
function xorBy(arr1, arr2, mapper) {
  var union = unionBy.unionBy(arr1, arr2, mapper);
  var intersection = intersectionBy.intersectionBy(arr1, arr2, mapper);
  return differenceBy.differenceBy(union, intersection, mapper);
}
exports.xorBy = xorBy;
